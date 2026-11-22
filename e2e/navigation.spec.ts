import { expect, type Page, test } from "@playwright/test";

/**
 * 라우팅 동작 테스트. 라우터 교체 전(baseline)과 후 양쪽에서 같은 결과여야 한다.
 * URL(경로 + 쿼리), 히스토리(뒤로가기), 스크롤, 새 탭 열기를 검증한다.
 */

const url = (page: Page) => {
  const u = new URL(page.url());
  return u.pathname + u.search;
};

test.beforeEach(async ({ page }) => {
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
});

test.describe("desktop", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("faq: type 이 없으면 recruitment 로 이동하고, 목록 → 상세 → 뒤로가기", async ({
    page,
  }) => {
    await page.goto("/faq");
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");

    await page.locator("h2", { hasText: /^Q$/ }).first().click();
    await expect
      .poll(() => url(page))
      .toMatch(/^\/faq\/\d+\?type=recruitment$/);

    await page.getByRole("button", { name: /←/ }).click();
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");

    // 히스토리: 상세에서 브라우저 뒤로가기
    await page.locator("h2", { hasText: /^Q$/ }).first().click();
    await expect.poll(() => url(page)).toMatch(/^\/faq\/\d+/);
    await page.goBack();
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");
  });

  test("faq: 상세 직접 진입(type 없음)은 목록으로 리다이렉트된다 (기존 동작)", async ({
    page,
  }) => {
    await page.goto("/faq/1");
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");
    // 리다이렉트는 push 이므로 뒤로가기하면 다시 같은 리다이렉트가 일어난다
    await page.goBack();
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");
  });

  test("faq: 존재하지 않는 id", async ({ page }) => {
    await page.goto("/faq/9999?type=recruitment");
    await expect(page.locator("body")).toContainText(/.+/);
    expect(url(page)).toBe("/faq/9999?type=recruitment");
  });

  test("faq: 알 수 없는 type 은 그대로 유지(빈 목록)", async ({ page }) => {
    await page.goto("/faq?type=foo");
    await page.waitForLoadState("networkidle");
    expect(url(page)).toBe("/faq?type=foo");
    await expect(page.locator("h2", { hasText: /^Q$/ })).toHaveCount(0);
  });

  test("navbar: 페이지 이동, 로고, 같은 경로 클릭 시 스크롤", async ({
    page,
  }) => {
    await page.goto("/members");
    const nav = page.locator("nav");
    await nav.getByRole("link", { name: /프로젝트/ }).click();
    await expect.poll(() => url(page)).toBe("/projects");
    await nav.getByRole("link", { name: /자주 묻는 질문/ }).click();
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");
    await nav.getByRole("link", { name: /멤버/ }).click();
    await expect.poll(() => url(page)).toBe("/members");
    await page.getByRole("link", { name: "Home" }).click();
    await expect.poll(() => url(page)).toBe("/");
    // 이동 직후의 스크롤 리셋이 끝난 뒤에 스크롤한다
    await page.waitForTimeout(800);

    // 같은 경로 클릭: 이동하지 않고 맨 위로 스크롤
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(300);
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);
    await page
      .locator("nav")
      .getByRole("link", { name: /팀 소개/ })
      .click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    expect(url(page)).toBe("/");
  });

  // 의도된 변경: 기존(React Router)은 이동 후 스크롤을 유지했지만,
  // TanStack Router 로 옮기면서 페이지 이동 시 맨 위로 이동하도록 했다.
  // (이 테스트는 baseline 이 아닌 현재 빌드 기준이다.)
  test("이동 시 맨 위로 스크롤된다", async ({ page }) => {
    await page.goto("/members");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(300);
    await page
      .locator("nav")
      .getByRole("link", { name: /프로젝트/ })
      .click();
    await expect.poll(() => url(page)).toBe("/projects");
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  });

  test("navbar: 버그 제보는 새 탭", async ({ page, context }) => {
    // 새 탭의 최초 요청은 page.route 로 가로챌 수 없으므로 context.route 를 쓴다
    await context.route("https://cs.gistory.me/**", (r) =>
      r.fulfill({ body: "ok", contentType: "text/html" }),
    );
    await page.goto("/members");
    const popup = context.waitForEvent("page");
    await page
      .locator("nav")
      .getByRole("link", { name: /버그 제보/ })
      .click();
    expect(new URL((await popup).url()).host).toBe("cs.gistory.me");
    expect(url(page)).toBe("/members");
  });

  test("onboarding: 프로젝트 보러가기 버튼 → /projects", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const btn = page
      .getByRole("button")
      .filter({ hasText: /프로젝트/ })
      .last();
    await btn.scrollIntoViewIfNeeded();
    await btn.click();
    await expect.poll(() => url(page)).toBe("/projects");
  });

  test("히스토리: 뒤로가기 / 앞으로가기", async ({ page }) => {
    await page.goto("/members");
    await page.goto("/");
    await page.goBack();
    await expect.poll(() => url(page)).toBe("/members");
    await page.goForward();
    await expect.poll(() => url(page)).toBe("/");
  });

  test("정의되지 않은 경로는 Not Found 를 보여주고, 정상 경로로 복구된다", async ({
    page,
  }) => {
    await page.goto("/no-such-page");
    await expect(page.locator("body")).toContainText("Not Found");
    expect(url(page)).toBe("/no-such-page");

    await page.goto("/members");
    await expect(page.locator("nav")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Not Found");
    expect(url(page)).toBe("/members");
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("사이드바 링크 이동 / 외부 링크", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.getByRole("link", { name: "멤버" }).click();
    await expect.poll(() => url(page)).toBe("/members");

    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.getByRole("link", { name: "자주 묻는 질문" }).click();
    await expect.poll(() => url(page)).toBe("/faq?type=recruitment");

    await page.getByRole("button", { name: "Toggle menu" }).click();
    const bug = page.getByRole("link", { name: "버그 제보" });
    await expect(bug).toHaveAttribute("href", "https://cs.gistory.me/");
  });
});
