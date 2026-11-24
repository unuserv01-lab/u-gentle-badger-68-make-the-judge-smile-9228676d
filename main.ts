// Make the Judge Smile — make.fun bounty entry.
// Writes one warm line (at most 200 characters) to entry.txt and prints
// it to stdout. Node 22, stdlib only. Deterministic: no network, no
// randomness, the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The lift broke, so the whole building walked down together — and Mrs. Lim, 84, reached the lobby first, laughing.";

// The gate counts Unicode code points, so the em dash counts as one.
const MAX_POINTS = 200;

const points = [...LINE].length;
if (points < 1 || points > MAX_POINTS) {
  console.error(`entry must be 1-${MAX_POINTS} characters, got ${points}`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be whitespace only");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${points} characters to ${outPath}`);
console.log(LINE);
