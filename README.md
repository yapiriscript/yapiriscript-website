# Yapiri Script — Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github)](https://yapiriscript.com)
[![Status](https://img.shields.io/badge/Status-Active-terracotta)](https://yapiriscript.com)

> **Yapiri** means *footprints* (lit. footsteps in Kokborok) — this is the digital home of the Yapiri script, an original phonemic alphabet designed for the Kokborok language of the Tiprasa people of Tripura, India.

🌐 **Live site:** [yapiriscript.com](https://yapiriscript.com)

---

## About the Project

The Yapiri script is a purpose-built phonemic alphabet for Kokborok — every sound is written explicitly, with no inherent vowels. It was designed with the Tiprasa community in mind, combining linguistic precision with cultural identity.

This repository contains the full source code for the Yapiri Script website — a multilingual, mobile-first static site that introduces the script, lets visitors try it interactively, and provides downloadable resources for learners and developers.

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — introduction, poem competition feature, download resources |
| `/about` | Story behind Yapiri and the Tiprasa community |
| `/script` | Full character chart with consonants, vowels, numerals, diacritics |
| `/try` | Try writing in Yapiri with the interactive web keyboard |
| `/download` | Download the Yapiri font and Keyman keyboard package |
| `/community` | Community links and contribution channels |
| `/yapiri-specification` | Full technical specification with PUA codepoints |
| `/primer` | Complete beginner's guide — printable as PDF |
| `/chart` | Quick-reference character chart — printable as PDF |
| `/blog` | Blog posts on topics related to the script |

---

## Features

- **Interactive virtual keyboard** — type in Yapiri directly in the browser, with support for mathematical operators, currency symbols, hyphen/reduplication keys, and auto-calculation in Yapiri numerals
- **Custom Yapiri font** — OpenType font (TTF/WOFF2) with PUA codepoints (U+E000–U+E02D) and GPOS mark-to-base anchors for tone and reduplication diacritics
- **Keyman keyboard support** — `.kmn` keyboard package for desktop (Windows, macOS) and mobile (iOS, Android) input
- **Yapiri Primer** — a complete beginner's learning guide covering vowels, consonants, numerals, diacritics, and writing rules, printable as PDF
- **Yapiri Chart** — quick-reference chart of all 48+1 characters with romanization, IPA values, and codepoints, printable as PDF
- **Yapiri in Verse** — community poem competition for works written or translated into Yapiri script, building a literary corpus
- **Mobile-first design** — responsive layout with hamburger menu and scroll-reveal animations
- **Full technical specification** — complete encoding reference with glyph blocks and codepoint tables

---

## Tech Stack

- **HTML / CSS / Vanilla JS** — no build tools or frameworks
- **Custom Yapiri Font** — engineered in FontForge, PUA-mapped (TTF + WOFF2)
- **Google Fonts** — Teko, Cormorant Garamond, DM Mono
- **GitHub Pages** — static hosting
- **Hostinger DNS** — domain management for `yapiriscript.com` and `yapiriscript.in`

---

## Design System

| Token | Value |
|-------|-------|
| Background | Dark ink (`#111`) |
| Primary accent | Gold |
| Secondary accent | Terracotta |
| Display font | Teko |
| Body font | Cormorant Garamond |
| Mono font | DM Mono |

---

## Getting Started

This is a static site — no build step required.

```bash
git clone https://github.com/YOUR_USERNAME/yapiriscript.com.git
cd yapiriscript.com
# Open index.html in a browser, or serve with any static file server
npx serve .
```

---

## Font & Keyboard

The Yapiri font file and Keyman keyboard package (`.kmp`) are available for download at [yapiriscript.com/download](https://yapiriscript.com/download).

**PUA range:** U+E000 – U+E02D (48 core characters + 1 global hyphen = **48+1** total)

| Range | Count | Category |
|-------|-------|----------|
| U+E000–U+E005 | 6 | Vowel letters (independent) |
| U+E006–U+E01E | 25 | Consonants |
| U+E01F–U+E028 | 10 | Numerals (0–9) |
| U+E029–U+E02D | 5 | Punctuation |
| U+0301, U+030B | 2 | Combining diacritics (tone & reduplication) |
| U+002D | 1 | Global symbol — hyphen (word reduplication marker) |

**Keyman key mappings (highlights):**
- Vowels: `a e i u o x` (x = schwa ə)
- Aspirates: `Shift+P / T / K / C`
- Velar nasal (ng): `q`
- n-prime (n′): `Q`
- High tone mark: `'` → U+0301
- Reduplication mark (U+030B): see the [interactive keyboard](https://yapiriscript.com/try.html) for the full key layout

---

## Roadmap

- [x] Font engineering — PUA mapping, OpenType GPOS anchors (TTF + WOFF2)
- [x] Full website with interactive keyboard
- [x] Keyman keyboard package (desktop & mobile)
- [x] Formal specification page
- [x] Yapiri Primer (printable PDF guide)
- [x] Yapiri Chart (printable PDF reference)
- [x] Yapiri in Verse — community poem competition
- [x] Google Search Console & sitemap
- [ ] Unicode submission — Phase 2 in progress (community & institutional adoption); formal proposal via Script Encoding Initiative (UC Berkeley) is Phase 4
- [ ] UCSUR registration of PUA codepoints
- [ ] Community-contributed learning materials
- [ ] Mobile Keyman touch layout refinement

---

## Contributing

Contributions, feedback, and community resources are welcome. If you're a Kokborok speaker, linguist, or script enthusiast, feel free to open an issue or reach out through the community channels on the site.

---

## License

MIT — see [LICENSE](LICENSE) for details.  
The Yapiri script design and font are the intellectual work of **Animesh Debbarma**.

---

## Connect

- 🌐 [yapiriscript.com](https://yapiriscript.com)
- 📘 Facebook: [@YapiriKokborok](https://www.facebook.com/YapiriKokborok)
- 📸 Instagram: [@yapiri_script](https://instagram.com/yapiri_script)
- 🐦 X: [@yapiriscript](https://x.com/yapiriscript)
- ▶️ YouTube: [@YapiriScript26](https://www.youtube.com/@YapiriScript26)
- 💬 WhatsApp Community: [Join here](https://whatsapp.com/channel/0029Vb7nZNk4o7qV793yfz1d)
