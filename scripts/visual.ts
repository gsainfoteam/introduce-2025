/**
 * 시각 회귀 테스트 러너.
 *
 *   bun run visual:baseline [ref]  기준 ref(기본 master)를 별도 worktree 에서 빌드하고 스냅샷을 생성한다.
 *   bun run visual:test            현재 작업 트리를 빌드하고 기준 스냅샷과 pixel 단위로 비교한다 (0 diff).
 *
 * 기준 스냅샷은 `e2e/__snapshots__` (git 무시)에 저장된다.
 */
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { $ } from "bun";

const [mode, ref = "master"] = process.argv.slice(2);
const cwd = process.cwd();
const env = { ...process.env, VITE_MODE: "production" };

if (mode === "baseline") {
  const dir = join(mkdtempSync(join(tmpdir(), "visual-baseline-")), "src");
  await $`git worktree add --detach ${dir} ${ref}`;
  try {
    await $`bun install`.cwd(dir);
    await $`bunx --bun vite build --mode production`.cwd(dir).env(env);
    // 기준 스냅샷은 시각 테스트만 대상으로 한다 (navigation 테스트는 현재 빌드 기준 동작을 검사함)
    await $`bunx playwright test e2e/visual.spec.ts --update-snapshots`
      .cwd(cwd)
      .env({
        ...env,
        VISUAL_ROOT: dir,
        VISUAL_PORT: "4174",
      });
  } finally {
    await $`git worktree remove --force ${dir}`;
  }
} else if (mode === "test") {
  await $`bun run build`.env(env);
  await $`bunx playwright test`.env({ ...env, VISUAL_ROOT: cwd });
} else {
  console.error("usage: visual.ts <baseline [ref]|test>");
  process.exit(1);
}
