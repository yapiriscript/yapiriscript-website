# Yapiri Script — Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Firebase Hosting](https://img.shields.io/badge/Deployed-Firebase%20Hosting-orange?logo=firebase)](https://yapiriscript.com)
[![Status](https://img.shields.io/badge/Status-Active-green)](https://yapiriscript.com)
[![Version](https://img.shields.io/badge/Version-2.0-gold)](https://yapiriscript.com)

> **Yapiri** means *footprints* (lit. footsteps in Kokborok) — this is the digital home of the Yapiri script, an original phonemic alphabet designed for the Kokborok language of the Tiprasa people of Tripura, India.

🌐 **Live site:** [yapiriscript.com](https://yapiriscript.com)

---

## About the Project

The Yapiri script is a purpose-built phonemic alphabet for Kokborok — every sound is written explicitly, with no inherent vowels. It was designed with the Tiprasa community in mind, combining linguistic precision with cultural identity.

This repository contains the full source code for the Yapiri Script website — a mobile-first static site that introduces the script, lets visitors try it interactively, and provides downloadable resources for learners and developers.

**v2.0 milestone:** Codepoints migrated from BMP PUA (U+E000) to UCSUR Plane 15 (U+F1CA0–U+F1CFF). Character inventory finalized at 45. UCSUR block reservation confirmed by Rebecca Bettencourt (June 2026).

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — introduction, poem competition feature, download resources |
| `/about` | Story behind Yapiri and the Tiprasa community |
| `/script` | Full character chart with consonants, vowels, numerals, diacritics |
| `/try` | Interactive web keyboard for typing in Yapiri |
| `/download` | Download the Yapiri font (TTF/WOFF2) and Keyman keyboard package |
| `/community` | Community links, learning resources, and contribution channels |
| `/ucsur` | Official UCSUR registration proposal (Plane 15 block U+F1CA0–U+F1CFF) |
| `/yapiri-specification` | Full technical specification with PUA codepoints |
| `/primer` | Complete beginner's guide — printable as PDF |
| `/chart` | Quick-reference character chart — printable as PDF |
| `/blog` | Blog posts on topics related to the script |

---

## Features

- **Interactive virtual keyboard** — type in Yapiri directly in the browser, with mathematical operators, currency symbols, and auto-calculation in Yapiri numerals
- **Custom Yapiri font** — OpenType font (TTF/WOFF2) with UCSUR Plane 15 codepoints (U+F1CA0–U+F1CFF) and GPOS mark-to-base anchors for the high tone diacritic
- **Keyman keyboard v2.0** — `.kmp` package for desktop (Windows, macOS) and mobile (iOS, Android) with full P15 codepoint support
- **UCSUR proposal page** — publicly accessible at yapiriscript.com/ucsur.html, submitted to Rebecca Bettencourt (UCSUR) June 2026
- **Yapiri Primer** — complete beginner's learning guide covering all 45 characters, printable as PDF
- **Yapiri Chart** — quick-reference chart of all 45 characters with romanization, IPA values, and codepoints
- **Yapiri in Verse** — community poem competition building a Kokborok literary corpus (₹500 prize + Digital Certificate)
- **Mobile-first design** — responsive layout with hamburger menu at 1024px, scroll-reveal animations, custom scrollbar
- **Full technical specification** — complete encoding reference with glyph blocks and codepoint tables
- **Firebase Firestore** — backend for blog post likes, comments, and poem competition data

---

## Tech Stack

- **HTML / CSS / Vanilla JS** — no build tools or frameworks
- **Custom Yapiri Font** — engineered in FontForge, UCSUR Plane 15 PUA-mapped (TTF + WOFF2)
- **Google Fonts** — Teko, Cormorant Garamond, DM Mono
- **Firebase Hosting** — primary web hosting
- **Firebase Firestore** — backend for likes, comments, competition data
- **GitHub** — version control
- **Hostinger** — DNS management for `yapiriscript.com`

---

## Design System

| Token | Value |
|-------|-------|
| Background | Dark ink (`#1a1209`) |
| Primary accent | Gold (`#c9922a`) |
| Secondary accent | Terracotta (`#b85c38`) |
| Display font | Teko |
| Body font | Cormorant Garamond |
| Mono font | DM Mono |

---

## Getting Started

This is a static site — no build step required.

```bash
git clone https://github.com/yapiriscript/yapiriscript-website.git
cd yapiriscript-website
# Open index.html in a browser, or serve with any static file server
npx serve .
```

---

## Font & Keyboard

The Yapiri font and Keyman keyboard package (`.kmp`) are available at [yapiriscript.com/download](https://yapiriscript.com/download).

**UCSUR Plane 15 block:** U+F1CA0 – U+F1CFF (96 slots, 45 assigned)

| Range | Count | Category |
|-------|-------|----------|
| U+F1CA0–U+F1CA5 | 6 | Vowel letters (independent) |
| U+F1CA7–U+F1CBD | 23 | Consonants |
| U+F1CC0–U+F1CC9 | 10 | Numerals (0–9) |
| U+F1CCB–U+F1CCF | 5 | Punctuation |
| U+F1CD1 | 1 | High tone mark (combining diacritic) |

---

## Roadmap

- [x] Font engineering — UCSUR Plane 15 mapping, OpenType GPOS anchors (TTF + WOFF2)
- [x] Full website with interactive keyboard
- [x] Keyman keyboard package v2.0 (desktop & mobile, P15 codepoints)
- [x] Formal specification page
- [x] Yapiri Primer (printable PDF guide)
- [x] Yapiri Chart (printable PDF reference)
- [x] Yapiri in Verse — community poem competition
- [x] Google Search Console & sitemap
- [x] UCSUR proposal submitted — block U+F1CA0–U+F1CFF reserved (June 2026)
- [ ] Learn section (interactive self-paced lessons with audio)
- [ ] Unicode submission — Phase 2 in progress (community & institutional adoption)
- [ ] Dedicated mobile keyboard app (Android/iOS)
- [ ] Kokborok spell checker

---

## Contributing

Contributions, feedback, and community resources are welcome. If you're a Kokborok speaker, linguist, or script enthusiast, feel free to open an issue or reach out through the community channels on the site.

---

## License

- Website source code: MIT — see [LICENSE](LICENSE)
- Yapiri font (TTF/WOFF2): SIL Open Font License 1.1 — Reserved Font Name "Yapiri"
- Script design & specification: CC BY-NC-ND 4.0

The Yapiri script design is the intellectual work of **Animesh Debbarma**.

---

## Connect

- 🌐 [yapiriscript.com](https://yapiriscript.com)
- 📘 Facebook: [@YapiriKokborok](https://www.facebook.com/YapiriKokborok)
- 📸 Instagram: [@yapiri_script](https://instagram.com/yapiri_script)
- 🐦 X: [@yapiriscript](https://x.com/yapiriscript)
- ▶️ YouTube: [@YapiriScript26](https://www.youtube.com/@YapiriScript26)
- 💬 WhatsApp: [Join here](https://whatsapp.com/channel/0029Vb7nZNk4o7qV793yfz1d)
