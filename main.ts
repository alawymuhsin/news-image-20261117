// news-image-20261117 entry (Node 22, standard library only).
//
// The image lives in this repository as entry.png — a front page drawn for
// Tuesday 17 November 2026 — and this program copies it to the grader's
// output directory. Nothing is fetched and nothing is drawn at run time, so
// every run writes the same bytes to /output/entry.png.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Determinism: the copy is byte for byte, so the two grading runs produce
// identical output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
