import { rm } from "node:fs/promises";
import path from "node:path";

const mode = process.argv[2] ?? "all";
const root = process.cwd();

const targetsByMode = {
  all: [".next", ".next-dev", "out"],
  build: [".next", "out"],
  dev: [".next-dev"]
};

const targets = targetsByMode[mode];

if (!targets) {
  console.error(`Unknown clean mode: ${mode}`);
  process.exit(1);
}

for (const target of targets) {
  const resolvedTarget = path.resolve(root, target);
  const relativeTarget = path.relative(root, resolvedTarget);

  if (relativeTarget.startsWith("..") || path.isAbsolute(relativeTarget)) {
    console.error(`Refusing to remove path outside workspace: ${resolvedTarget}`);
    process.exit(1);
  }

  await rm(resolvedTarget, { force: true, recursive: true });
}
