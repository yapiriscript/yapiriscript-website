# Yapiri Script — Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github)](https://yapiriscript.com)
[![Status](https://img.shields.io/badge/Status-Active-terracotta)](https://yapiriscript.com)

> **Yapiri** (ᯌᯩᯇᯤᯔᯤ) means *footprints* in Kokborok — this is the digital home of the Yapiri script, an original phonemic alphabet designed for the Kokborok language of the Borok people of Tripura, India.

🌐 **Live site:** [yapiriscript.com](https://yapiriscript.com)

---

## About the Project

The Yapiri script is a purpose-built phonemic alphabet for Kokborok — every sound is written explicitly, with no inherent vowels. It was designed with the Borok community in mind, combining linguistic precision with cultural identity.

This repository contains the full source code for the Yapiri Script website — a multilingual, mobile-first static site that introduces the script, lets visitors try it interactively, and provides downloadable resources for learners and developers.

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — introduction, interactive virtual keyboard |
| `/about` | Story behind Yapiri and the Borok community |
| `/script` | Full character chart with consonants, vowels, numerals, diacritics |
| `/try` | Try writing in Yapiri with the interactive keyboard |
| `/download` | Download the Yapiri font and Keyman keyboard package |
| `/community` | Community links and contribution channels |
| `/yapiri-specification` | Full technical specification with PUA codepoints |

---

## Features

- **Interactive virtual keyboard** — type in Yapiri directly in the browser, with support for mathematical operators, currency symbols, hyphen/reduplication keys, and auto-calculation in Yapiri numerals
- **Custom Yapiri font** — OpenType font with PUA codepoints (U+E000–U+E02F) and GPOS mark-to-base anchors for tone and reduplication diacritics
- **Keyman keyboard support** — `.kmn` keyboard package for desktop and mobile input
- **Mobile-first design** — responsive layout with hamburger menu and scroll-reveal animations
- **Full technical specification** — complete encoding reference with glyph blocks and codepoint tables

---

## Tech Stack

- **HTML / CSS / Vanilla JS** — no build tools or frameworks
- **Custom Yapiri Font** — engineered in FontForge, PUA-mapped
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

**PUA range:** U+E000 – U+E02F (48 characters: consonants, vowels, numerals, punctuation, diacritics)

**Keyman key mappings (highlights):**
- Vowels: `a e i u o x` (x = schwa ə)
- Aspirates: `Shift+P / T / K / C`
- Velar nasal (ng): `q`
- n-prime (n′): `Q`
- High tone mark: `'` → U+0301
- Reduplication mark: `\` → U+030B
- ZWNJ: `Shift+\` → U+200C

---

## Roadmap

- [x] Font engineering — PUA mapping, OpenType GPOS anchors
- [x] Full website with interactive keyboard
- [x] Keyman keyboard package
- [x] Formal specification page
- [x] Google Search Console & sitemap
- [ ] Unicode submission via Script Encoding Initiative (UC Berkeley)
- [ ] Community-contributed learning materials
- [ ] Mobile Keyman touch layout refinement

---

## Contributing

Contributions, feedback, and community resources are welcome. If you're a Kokborok speaker, linguist, or script enthusiast, feel free to open an issue or reach out through the community channels on the site.

---

## License

MIT — see [LICENSE](LICENSE) for details.  
The Yapiri script design and font are the intellectual work of **Animesh Debbarma (Zitorin)**.

---

## Connect

- 🌐 [yapiriscript.com](https://yapiriscript.com)
- 📸 Instagram: [@yapiri_script](https://instagram.com/yapiri_script)
- 💬 WhatsApp Community: [Join here](https://whatsapp.com/channel/0029Vb7nZNk4o7qV793yfz1d)
