import { defineConfig } from "@playwright/test";

/**
 * 시각 회귀 테스트 설정.
 *
 * - VISUAL_ROOT: 서빙할 프로젝트 루트(빌드 결과 `build/` 가 있는 곳). 기본값은 현재 디렉터리.
 * - VISUAL_PORT: preview 서버 포트.
 * - 기준 스냅샷은 `bun run visual:baseline` 으로 기준 커밋(master)에서 생성한다.
 */
const root = process.env.VISUAL_ROOT ?? process.cwd();
const port = Number(process.env.VISUAL_PORT ?? 4173);

export default defineConfig({
  testDir: "./e2e",
  snapshotPathTemplate: "{testDir}/__snapshots__/{arg}{ext}",
  timeout: 180_000,
  fullyParallel: true,
  reporter: [["list"]],
  workers: process.env.CI ? 2 : 4,
  retries: 0,
  expect: {
    // 픽셀 수 diff 는 0 으로 강제한다. threshold 는 픽셀당 색 거리 허용치로,
    // Chrome 래스터의 1~2/255 수준 양자화 노이즈(동일 코드 반복 시에도 발생)만 흡수한다.
    toHaveScreenshot: { maxDiffPixels: 0, threshold: 0.01 },
  },
  use: {
    baseURL: `http://localhost:${port}`,
    browserName: "chromium",
    deviceScaleFactor: 1,
    colorScheme: "light",
    reducedMotion: "no-preference",
  },
  webServer: {
    command: `bunx --bun vite preview --port ${port} --strictPort`,
    cwd: root,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
