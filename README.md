# Abdul Moiz React Portfolio

React + Vite portfolio with an editorial design and interactions based on the current [Visuvate homepage](https://visuvate.com/), adapted to Abdul Moiz's AI/ML work. All five production projects, fifteen practice projects, thirty skills, education details, original external links, and the PDF resume are preserved.

## Design and interactions

- Black and white layout, blue pulsing gradient bars, oversized typography, and serif accents.
- Character-by-character headline entrance and staggered rolling text on buttons.
- Editor-style hero with a draggable project strip, press-and-hold previews, project dialogs, desktop/mobile previews, explorer tabs, collapsible panels, playback, and speed controls.
- Persistent dark/light theme, responsive navigation, scroll reveals, animated statistics, and a parallax collage.
- GSAP scroll-driven work gallery on tall desktop windows; regular project cards on mobile, short windows, and reduced-motion devices. A list view and domain filters are always available.
- Original project descriptions, metrics, source/demo/model/API links, and expandable practice-project details inside project dialogs.
- Skills grid, education, production methodology, resume viewer/download, FAQs, email copy, and contact links.

Project artwork is original HTML/CSS/SVG interface illustration, labeled as an interface study. It is not a screenshot of the deployed applications. Visuvate's commercial font and branded project imagery are not bundled; freely available Geist, DM Sans, and Instrument Serif fonts provide a similar typographic direction.

## Run locally

From this folder in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173). Save changes to see them refresh automatically. Use `npm.cmd` on Windows when PowerShell blocks `npm.ps1`.

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Deploy the generated `dist` folder to static hosting. React requires the development server or a built deployment; do not open the new index.html directly.

## Checks

```powershell
npm.cmd run build
npm.cmd test
```

The tests compare content against the original HTML, verify the PDF byte-for-byte, and exercise project filters/dialogs, editor controls, mobile navigation, theme storage, resume controls, email copy, and animation initialization in a simulated DOM. They do not replace visual testing in a real browser.

## Edit the portfolio

- `src/data/portfolio.js`: project, practice-project, skill, education, and social data.
- `src/components/`: page sections, project editor, original interface illustrations, and detail dialogs.
- `src/components/ui.jsx`: shared buttons, rolling text, icons, gradient bars, and accordions.
- `src/styles.css`: design tokens, layouts, artwork, animation styles, and responsive rules.
- `src/hooks/usePortfolioEffects.js`: GSAP entrances, scroll reveals, counters, collage parallax, and Lenis smooth scrolling with lifecycle cleanup.
- `public/Abdul-Moiz-Resume.pdf`: extracted original resume; replace this file to update it.
- `src/App.jsx`: page composition.

The original `Abdul Moiz — AI_ML Engineer.html` remains available for reference. The previous unrelated index.html is saved at `archive/previous-index.html`, and the first React conversion is saved at `archive/react-v1`.

The public reference HTML, styling, and animation scripts were reviewed. A connected browser was unavailable during implementation, so a pixel-for-pixel visual match has not been verified. This project adapts the homepage experience to the existing personal portfolio; the reference studio's pricing, testimonials, blog, template shop, and separate service pages are not fabricated as personal content.
