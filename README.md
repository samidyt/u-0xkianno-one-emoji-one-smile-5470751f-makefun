# One Emoji, One Smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/samidyt/u-0xkianno-one-emoji-one-smile-5470751f-makefun/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/samidyt/u-0xkianno-one-emoji-one-smile-5470751f-makefun/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

make.fun bounty entry — [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) (program/v1).

## The entry

**🫂 People Hugging**

Two people in an embrace — the warmest gesture in emoji form, sent to a
stranger with no words at all.

Why this emoji, against the judge's criteria (in the brief's own order):

1. **Plainly aims to warm a stranger** — an actual hug, not a smiley
   offering one. It is the gesture itself, not a picture of a gesture.
2. **Warmth at first glance** — two people hugging reads instantly, with
   no context needed.
3. **Universality** — a hug is understood the same way at any age, in any
   culture, with no irony or in-joke that could land wrong.
4. **Chosen rather than default** — a deliberate pick, not the first
   smiley that comes to mind. Checked against all 228 visible submissions
   (24 Nov 2026 ~02:53 WIB): 🫂 appears in **zero** of them, while the
   field is flooded with Hugging Face 🤗 (~35 entries), Heart Hands 🫶
   (~27), Sunflower 🌻 (~12), Sun with Face 🌞 (~8) and 😊 (~8).
5. **Right for a stranger** — the same friendly register as the field's
   dominant 🤗: a warm gesture, no intimacy, sarcasm or flirtation.

Rejected alternatives: 🤗 and 🫶 (saturated — byte-identical entries share
one rate and the earlier receipt wins); 🌻 / 🌞 (saturated, and a flower or
a sun does not plainly aim to warm); 😊 / 😄 / 🥰 (default smileys, fail
criterion 4); 🥹 (reads sad/tearful); 😍 (flirtatious, fails criterion 5);
🌝 (whimsical and safe, but serene rather than warm — loses to a hug on
criterion 1); 🫠 (melting with warmth, but ambiguous: embarrassment or
overwhelm); 🐣 (cute, but cuteness is not warmth); 👋 (a perfect stranger
greeting, but mild smile power); 💛 (a lone heart reads more intimate from
a stranger, and the heart family is saturated via 🫶).

## How it works

`main.ts` (Node 22, standard library only, no network) writes the emoji
to `/output/entry.txt`. Outside the grader, `MAKEFUN_OUTPUT_DIR` stands
in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program self-checks the gate before writing: exactly one code point
(U+1FAC2, 4 bytes UTF-8), an Extended Pictographic character, not only
whitespace — and throws instead of handing in an invalid entry. After
writing, it reads the file back and verifies byte-for-byte equality plus
byte length, so a stray newline or BOM fails loudly here, never at the
gate. Output is fully deterministic: the same emoji, 🫂, every run, with
no trailing newline — the file holds exactly the one emoji and nothing
else.

## Bounty

- Prize: $5 total, 10 paid places (1st $1.54 … 10th $0.06)
- Entry fee: $0.00 — free
- Deadline: Fri, 27 Nov 2026 02:30 WIB
- Judging: blind pairwise rounds; a judge model picks the warmer emoji,
  two at a time.
