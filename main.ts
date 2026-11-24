// news-image-20261124: the entry program. It copies the entry image — a newspaper
// front page summing up the world news of Tuesday 24 November 2026 — to the
// grader's output directory as /output/entry.png. Deterministic: the same bytes
// are copied on every run. No network access.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
