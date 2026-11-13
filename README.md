# [Development Portfolio 2.00](https://tertiusroach.github.io/development-portfolio_2.00/)

My first portfolio built on my own architecture, from 31 December 2023 to 22 April 2024. The last commit before the next version says it best: _"Eish it's hard word to build a resume."_

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#how-a-page-is-built">How a Page Is Built</a></li>
    <li><a href="#what-changed-in-2026">What Changed in 2026</a></li>
    <li><a href="#pages">Pages</a></li>
  </ol>
</details>

---

## About The Project

Three pages, all built the same way:

- **[Index](https://tertiusroach.github.io/development-portfolio_2.00/)**: a timeline of every version of this portfolio, from the Udemy projects in 2022 to TraLogFin 4.00.
- **[Résumé](https://tertiusroach.github.io/development-portfolio_2.00/resume)**: home, skills, employment and contact.
- **[Scale](https://tertiusroach.github.io/development-portfolio_2.00/scale)**: watch every heading resize with your screen, and the sum behind it.

The ideas started here are the ones 4.00 still runs on: pages made of named blocks, state classes as a contract between scripts and styles, and a separate design for landscape and portrait.

## Built With

- [Gulp](https://gulpjs.com/) copies, compiles and minifies everything from `src/` into `dist/`
- [TypeScript](https://www.typescriptlang.org/) in namespaces, loaded in the browser by [RequireJS](https://requirejs.org/)
- [jQuery](https://jquery.com/) for events and classes
- [Sass](https://sass-lang.com/) for the styles, with [Bootstrap](https://getbootstrap.com/) underneath
- [Font Awesome](https://fontawesome.com/) for icons

## Getting Started

You need [Node.js](https://nodejs.org/en) (version 18 or newer).

```sh
git clone https://github.com/TertiusRoach/development-portfolio_2.00.git
cd development-portfolio_2.00
npm install
npm start
```

`npm start` builds every page, opens your browser on http://localhost:2000 and rebuilds whichever page you save. Press **Ctrl + C** to stop it.

| Command          | What it does                       |
| ---------------- | ---------------------------------- |
| `npm start`      | Build everything, serve and watch  |
| `npm run build`  | Build all three pages once         |
| `npm run index`  | Build only the index page          |
| `npm run resume` | Build only the résumé              |
| `npm run scale`  | Build only the scale page          |
| `npm run clean`  | Empty `dist/`                      |

`dist/` is committed on purpose: GitHub Pages serves this repository as it is, with no build step.

## How a Page Is Built

The full walkthrough, from clone to website, is in [src/front-end/utilities/document/PROCESS.md](src/front-end/utilities/document/PROCESS.md). The short version:

Every page is made from eight blocks. Each block has a lettered folder, and the letter follows the stacking order, back to front:

> A-body **→** B-overlay **→** C-header **→** D-footer **→** E-leftbar **→** F-rightbar **→** G-main **→** H-data

Each block keeps its HTML, SCSS and TypeScript together: `src/front-end/pages/resume/C-header/default-header/default-header.{html,scss,ts}`.

At runtime, [Main.ts](src/front-end/utilities/Main.ts) reads the page name and calls `Load.page('default-body')`. [Load.ts](src/front-end/utilities/Load.ts) fetches the block's HTML, puts it in place and runs its `events()`. The body block then loads the others the same way. A page only lists the blocks it uses: the index needs a header, a main and a footer, the résumé uses all of them.

Gulp builds a page by joining all its SCSS files into one `style.css`, with Bootstrap at the top. **Because Bootstrap comes first, a font `@import` in the SCSS is ignored by the browser,** so the font loads through a `<link>` in each page's `<head>`.

## What Changed in 2026

This version was finished two and a half years later. The original ideas stayed; the repetition went. Every change is its own commit on the `homage` branch, so each one can be read on its own.

- **180,518 lines became 14.** `scale-text.scss` had one `@media` rule for every pixel from 3840 down to 1. Every row was the same sum (size at 3840 × screen width ÷ 3840), so each tag is now one `min()` line. It was checked against all 53,760 old values: never more than 0.005px apart.
- **35,769 lines became 141.** The résumé had the same kind of table for its profile circles, carousels and sections. Most rows were the screen height minus a fixed number. The portrait carousel was tuned by hand at real phone sizes, so it keeps its shape in 13 straight-line pieces, each within 2px.
- **Stylesheets dropped from 2–3.5 MB to about 250 KB per page,** and most of what's left is Bootstrap.
- **One loader.** `Load.index()` and `Load.resume()` were the same function twice. `Find.ts` already had `// Load.page('default-body');` waiting, so the shared loader got that name.
- **`Info.ts` reads from tables.** 38 skills are one row each, and the 50 test numbers are worked out from their position. The calls and their answers didn't change.
- **The font finally loads.** See the note on `@import` above.
- **`package.json` is tracked.** It used to be in `.gitignore`, so nobody could clone and build this project.
- **No password in the code.** The MongoDB study reads its address from `MONGO_URI`.
- **Photoshop files removed.** They're still in the original release.

## Pages

| Page    | Offline (`npm start`)               | Website                                                                                          |
| ------- | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| Index   | http://localhost:2000/              | [tertiusroach.github.io/development-portfolio_2.00](https://tertiusroach.github.io/development-portfolio_2.00/) |
| Résumé  | http://localhost:2000/resume.html   | [/resume](https://tertiusroach.github.io/development-portfolio_2.00/resume)                      |
| Scale   | http://localhost:2000/scale.html    | [/scale](https://tertiusroach.github.io/development-portfolio_2.00/scale)                        |

---

[Design Syntax](https://www.compart.com/en/unicode/block/U+25A0)
[🠉](https://www.compart.com/en/unicode/U+1F809)
[🠊](https://www.compart.com/en/unicode/U+1F80A)
[🠋](https://www.compart.com/en/unicode/U+1F80B)
[🠈](https://www.compart.com/en/unicode/U+1F808)
