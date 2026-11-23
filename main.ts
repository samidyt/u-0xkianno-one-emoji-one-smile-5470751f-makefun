// One Emoji, One Smile — make.fun entry (program/v1).
//
// The harness runs `node main.ts` (Node 22, standard library only, no
// network). The program writes exactly one emoji to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The emoji: 🫂 People Hugging (U+1FAC2) — two people in an embrace.
// Against the judge's brief, in its own order:
//   1. It plainly aims to warm a stranger: an actual hug is the warmest
//      gesture in emoji form — warmer than a smiley offering one.
//   2. Warmth at first glance: two people hugging reads instantly, no
//      context needed.
//   3. Universality: a hug is understood the same way at any age, in any
//      culture, with no irony or in-joke.
//   4. Chosen rather than default: a deliberate pick, not the first smiley
//      that comes to mind — and absent from all 228 visible submissions
//      (24 Nov 2026 ~02:53 WIB), where Hugging Face 🤗 (~35) and Heart
//      Hands 🫶 (~27) dominate.
//   5. Right for a stranger: the same friendly register as the field's
//      dominant 🤗 — a warm gesture, no intimacy, sarcasm or flirtation.
//
// Field check (GET /api/competitions/u-0xkianno-one-emoji-one-smile-5470751f,
// 228 submissions, 24 Nov 2026 ~02:53 WIB): 🫂 appears in zero titles.
// Rejected: 🤗/🫶 (saturated; byte-identical entries share one rate and the
// earlier receipt wins), 🌻/🌞 (saturated, and a flower/sun does not plainly
// aim to warm), 😊/😄/🥰 (default smileys, fail criterion 4), 🥹 (reads
// sad/tearful), 😍 (flirtatious, fails criterion 5), 🌝 (whimsical and
// safe, but serene rather than warm — loses to a hug on criterion 1),
// 🫠 (melting with warmth, but ambiguous: embarrassment/overwhelm reading),
// 🐣 (cute, but cuteness is not warmth), 👋 (perfect stranger greeting,
// but mild smile power), 💛 (a lone heart reads more intimate from a
// stranger, and the heart family is saturated via 🫶).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🫂";

// Gate, from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 8 characters, not only white space, and exactly one emoji. Check
// our own output before writing it, and fail loudly instead of handing
// in a bad entry. Count code points (not UTF-16 units: 🫂 is one code
// point, U+1FAC2, 4 bytes UTF-8). The output is fully deterministic: the
// same emoji every run, with no trailing newline — the file holds exactly
// the one emoji and nothing else.
const codePoints = [...EMOJI];
if (
  codePoints.length !== 1 ||
  EMOJI.trim().length === 0 ||
  !/\p{Extended_Pictographic}/u.test(EMOJI)
) {
  throw new Error(`invalid entry emoji: ${JSON.stringify(EMOJI)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Second pass, added after the first write: read the file back and prove
// it holds byte-for-byte exactly the one emoji before the run can count
// as a success. A write that silently gained a newline or a second
// character must fail here, never reach the gate. Also assert the byte
// length matches, so a stray BOM or encoding slip is caught too.
const written = readFileSync(outPath, "utf8");
if (written !== EMOJI) {
  throw new Error(
    `entry mismatch: file holds ${JSON.stringify(written)}, expected ${JSON.stringify(EMOJI)}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(EMOJI, "utf8")) {
  throw new Error(
    `entry byte-length mismatch: ${Buffer.byteLength(written, "utf8")} vs ${Buffer.byteLength(EMOJI, "utf8")}`,
  );
}
console.log(`entry ok: ${EMOJI} (U+${EMOJI.codePointAt(0)!.toString(16).toUpperCase()})`);
