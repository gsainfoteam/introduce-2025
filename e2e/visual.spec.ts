import { expect, type Page, test } from "@playwright/test";

const VIEWPORTS = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1280", width: 1280, height: 800 },
  { name: "1920", width: 1920, height: 1080 },
] as const;
const LOCALES = ["ko", "en"] as const;
const FAQ_IDS = Array.from({ length: 10 }, (_, i) => i + 1);

const SHOT = {
  animations: "disabled",
  caret: "hide",
} as const;

async function prepare(page: Page, path: string, locale: "ko" | "en") {
  // 외부 폰트 요청은 결정성을 위해 차단한다 (baseline 과 동일하게 적용됨).
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await page.goto(path);
  await page.waitForLoadState("networkidle");
  if (locale === "en") {
    const engs = page.getByRole("radio", { name: "select language: ENG" });
    const toggle = page.getByRole("button", { name: "Toggle menu" });
    const mobile = await toggle.isVisible();
    if (mobile) await toggle.click();
    // 데스크톱: nav 의 버튼(첫 번째), 모바일: 사이드바의 버튼(유일)
    await engs.first().click();
    if (mobile) await toggle.click();
  }
  await settle(page);
  // 진입 애니메이션(GSAP/CSS transition)이 끝날 때까지 추가 대기
  await page.waitForTimeout(2000);
}

async function settle(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete ? undefined : img.decode().catch(() => undefined),
      ),
    );
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r)),
    );
  });
  await page.waitForTimeout(700);
}

/** 모달의 진입/퇴장 애니메이션이 끝난 최종 상태가 될 때까지 대기한다. */
async function waitModalOpen(page: Page) {
  await page.waitForFunction(() => {
    const el = document.querySelector<HTMLElement>("div.fixed.z-50 > div");
    if (!el) return false;
    const cs = getComputedStyle(el);
    const t = cs.transform;
    const identity = t === "none" || t === "matrix(1, 0, 0, 1, 0, 0)";
    return identity && cs.opacity === "1";
  });
}

/**
 * 애니메이션 도중에 만들어진 래스터 캐시가 남지 않도록, 최종 상태에서 레이어를 다시 그리게 한다.
 * (테스트 환경에서만 쓰는 DOM 토글이며 앱 코드에는 영향이 없다.)
 */
async function forceRepaint(page: Page) {
  await page.evaluate(async () => {
    const root = document.getElementById("root")!.parentElement!;
    const portal = document.querySelector<HTMLElement>("div.fixed.z-50");
    for (const el of [portal, root].filter(Boolean) as HTMLElement[]) {
      el.style.display = "none";
      void el.offsetHeight;
      el.style.display = "";
    }
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r)),
    );
  });
}

async function waitModalClosed(page: Page) {
  await page.waitForFunction(() => !document.querySelector("div.fixed.z-50"));
}

async function scrollTo(page: Page, y: number) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(250);
  await settle(page);
}

for (const vp of VIEWPORTS) {
  for (const locale of LOCALES) {
    test.describe(`${vp.name}-${locale}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });
      const key = `${vp.name}-${locale}`;

      test("onboarding (스크롤 위치별)", async ({ page }) => {
        await prepare(page, "/", locale);
        const total = await page.evaluate(
          () => document.documentElement.scrollHeight,
        );
        const step = Math.floor(vp.height / 2);
        let i = 0;
        for (let y = 0; y <= total; y += step) {
          await scrollTo(page, y);
          await expect(page).toHaveScreenshot(
            `onboarding-${key}-${String(i++).padStart(3, "0")}.png`,
            SHOT,
          );
        }
        // 스크롤 총량 자체도 검증 (레이아웃 높이가 달라지면 실패)
        expect(String(total)).toMatchSnapshot(`onboarding-${key}-height.txt`);
      });

      test("faq 목록", async ({ page }) => {
        await prepare(page, "/faq", locale);
        await expect(page).toHaveScreenshot(`faq-${key}.png`, {
          ...SHOT,
          fullPage: true,
        });
      });

      test("projects", async ({ page }) => {
        await prepare(page, "/projects", locale);
        await expect(page).toHaveScreenshot(`projects-${key}.png`, {
          ...SHOT,
          fullPage: true,
        });
        await page.getByRole("link").nth(2).hover();
        await page.waitForTimeout(400);
        await expect(page).toHaveScreenshot(`projects-hover-${key}.png`, SHOT);
      });

      test("members + 모달", async ({ page }) => {
        await prepare(page, "/members", locale);
        await expect(page).toHaveScreenshot(`members-${key}.png`, {
          ...SHOT,
          fullPage: true,
        });
        const cards = page.locator('[role="button"][tabindex]');
        const n = await cards.count();
        for (const idx of [0, Math.floor(n / 2), n - 1]) {
          await cards.nth(idx).click();
          await waitModalOpen(page);
          await forceRepaint(page);
          await settle(page);
          await expect(page).toHaveScreenshot(
            `members-modal-${key}-${idx === 0 ? "first" : idx === n - 1 ? "last" : "mid"}.png`,
            SHOT,
          );
          await page.keyboard.press("Escape");
          await waitModalClosed(page);
          await settle(page);
        }
      });
    });
  }
}

for (const vp of [VIEWPORTS[0], VIEWPORTS[2]]) {
  for (const locale of LOCALES) {
    test.describe(`faq-detail ${vp.name}-${locale}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });
      for (const id of FAQ_IDS) {
        test(`faq/${id}`, async ({ page }) => {
          // type 이 없으면 목록으로 리다이렉트되므로 유효한 type 을 함께 전달한다
          await prepare(page, `/faq/${id}?type=recruitment`, locale);
          // 목록이 아닌 상세 화면인지 확인한다
          await expect(page.getByRole("button", { name: /←/ })).toBeVisible();
          expect(new URL(page.url()).pathname).toBe(`/faq/${id}`);
          await expect(page).toHaveScreenshot(
            `faq-${id}-${vp.name}-${locale}.png`,
            { ...SHOT, fullPage: true },
          );
        });
      }
    });
  }
}
