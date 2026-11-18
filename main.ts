// news-image-20261117 — entry program (Node 22, stdlib only).
//
// This entry's image is a fixed file in the repo: entry.png, a one-page
// newspaper front page summing up Tuesday 17 November 2026. The program's
// only job is to place that exact file into the output folder the grader
// provides. It never downloads anything and never renders anything, so the
// bytes it writes are the same on every run.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   sha256sum out/entry.png entry.png   # the two hashes must match

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Where the grader wants the result; fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The image sits next to this file, so resolve it relative to the script
// itself rather than the working directory.
const entryDir = dirname(fileURLToPath(import.meta.url));
const imageBytes = readFileSync(join(entryDir, 'entry.png'));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), imageBytes);
