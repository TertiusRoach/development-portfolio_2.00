# The Process, Top to Bottom

How development-portfolio_2.00 goes from a folder of source files to a website, in the order it happens. Read it once from the top and you can change anything in this project.

| Document                             | What it covers                                    |
| ------------------------------------ | ------------------------------------------------- |
| **PROCESS.md**                       | This file: setup, build, loading, changing things |
| [FRONT-END.md](FRONT-END.md)         | The 2024 folder notes and file-format guide       |
| [BACK-END.md](BACK-END.md)           | Why this portfolio was started                    |
| [TICKET-NOTES.txt](TICKET-NOTES.txt) | The first character list for the ticket idea     |

---

## 1. Set Up

You need [Node.js](https://nodejs.org/en) 18 or newer, and Git.

```sh
git clone https://github.com/TertiusRoach/development-portfolio_2.00.git
cd development-portfolio_2.00
npm install
npm start
```

`npm start` builds all three pages, opens http://localhost:2000 and rebuilds whichever page you save. **Ctrl + C** stops it.

| Command          | What it does                      |
| ---------------- | --------------------------------- |
| `npm start`      | Build everything, serve and watch |
| `npm run build`  | Build all three pages once        |
| `npm run index`  | Build only the index              |
| `npm run resume` | Build only the résumé             |
| `npm run scale`  | Build only the scale page         |
| `npm run clean`  | Empty `dist/`                     |

---

## 2. The Folders

```
development-portfolio_2.00/
├── index.html  resume.html  scale.html   ← built by gulp: never edit these
├── dist/                                 ← built by gulp: never edit this either
├── src/
│   ├── gulpfile.js                       ← the build
│   ├── assets/                           ← course projects and experiments, not part of the site
│   └── front-end/
│       ├── front-end.js                  ← tells RequireJS where everything is
│       ├── pages/
│       │   ├── index/  resume/  scale/   ← one folder per page
│       │   ├── scale-text.scss           ← heading sizes for every page
│       │   └── override-bootstrap.scss
│       ├── utilities/
│       │   ├── Main.ts  Load.ts  Page.ts  Find.ts  Info.ts
│       │   └── document/                 ← you are here
│       └── vendors/                      ← Bootstrap, jQuery, RequireJS, Font Awesome
├── package.json
└── tsconfig.json
```

**The one rule:** you edit `src/`, and gulp writes everything else. A change made straight to `dist/` or a root `.html` file disappears on the next build.

---

## 3. A Page Is Eight Blocks

Every page is cut into the same eight blocks. The letter is the stacking order, back to front:

| Folder       | Element in the page       | Job                                    |
| ------------ | ------------------------- | -------------------------------------- |
| `A-body`     | `#<page>-body`            | The grid that holds everything else    |
| `B-overlay`  | `#<page>-overlay`         | Covers the page (menus, pop-ups)       |
| `C-header`   | `#<page>-header`          | Top bar                                |
| `D-footer`   | `#<page>-footer`          | Bottom bar                             |
| `E-leftbar`  | `#<page>-leftbar`         | Left side panel                        |
| `F-rightbar` | `#<page>-rightbar`        | Right side panel                       |
| `G-main`     | `#<page>-main`            | The content                            |
| `H-data`     | `#<page>-data`            | Hidden data for scripts                |

Each block keeps three files side by side, named after the block:

```
src/front-end/pages/resume/G-main/default-main/
├── default-main.html   ← the markup, without <html> or <body>
├── default-main.scss   ← its styles
└── default-main.ts     ← its events()
```

`default-` is the design in use. A block can have other designs next to it (`backup-main`, `scalable-header`); the page's own `.ts` file picks one by name.

A page only uses the blocks it needs. The index and the scale page use a header, a main and a footer; the résumé uses all of them except the overlay and data.

---

## 4. The Build (gulp)

`npm run resume` runs the `copyRésumé` task in [gulpfile.js](../../../gulpfile.js). The index and scale tasks are the same with another page name. Four jobs run, each on its own timer:

1. **copyHTML.** `pages/resume/resume.html` is stripped of comments, minified and copied to the root as `resume.html`, which is why every path inside it starts with `dist/`. Every block's `.html` is copied into `dist/front-end/pages/resume/`.
2. **compileSASS.** Every `.scss` file of the page (the page's own file first, then A to H) is joined into one temporary `style.scss` at the root. Sass compiles it into `dist/front-end/pages/resume/style.css`, the temporary file is deleted, and **Bootstrap is pasted on top.**
3. **copyContent.** Images, the CV and the loading animations in `pages/resume/~content/` go to `dist/front-end/pages/resume/content/`.
4. **compileCode.** TypeScript is compiled and minified into `dist/`, and the four vendor files are copied to `dist/front-end/vendors/`.

Two things this explains:

- **Why the pages build one after another.** All three pages use the same temporary `style.scss`, so two builds at once would mix their styles. `npm run build` and `npm start` wait between pages.
- **Why the font is a `<link>`.** CSS ignores an `@import` that isn't at the very top of the file, and Bootstrap is always at the top. So the Rubik font is loaded in each page's `<head>`.

---

## 5. What Happens in the Browser

Here is the résumé, from the moment the page opens:

1. `resume.html` shows the loading animation and loads `RequireJS.js`, which loads `dist/front-end/front-end.js`.
2. [Main.ts](../Main.ts) reads the page name from the address (`resume`) and calls `Load.page('default-body')`.
3. [Page.ts](../Page.ts) turns the name into two things: the file `dist/front-end/pages/resume/A-body/default-body/default-body.html` and the element `#resume-body`.
4. [Load.ts](../Load.ts) fetches that file, puts it inside `#resume-body`, gives it the class `default-body`, and calls `Resume.run('default-body')`.
5. `Resume.run` (in `pages/resume/resume.ts`) runs that block's `events()`.
6. The body's `events()` asks for the other blocks with `Find.block('default-header')`, `Find.block('default-main')` and so on. Each one goes through steps 3 to 5.

Every block arrives the same way, so a new block never needs a new loader.

---

## 6. How the Styles Work

- **Bootstrap first, then the page.** Anything in the page's SCSS wins over Bootstrap.
- **Two designs, not one stretched design.** Landscape and portrait each get their own layout through `@media (orientation: landscape)` and `@media (orientation: portrait)`.
- **Headings scale with the screen.** [scale-text.scss](../../pages/scale-text.scss) gives every heading one formula: `min(100vw × size ÷ 3840, size)`. In other words: full size on a 4K-wide screen, shrinking in step with the width below that, and following the height in portrait. The [scale page](https://tertiusroach.github.io/development-portfolio_2.00/scale) shows the formula live.
- **Sizes that follow the screen height** use `calc(100vh - 219px)` and similar, written twice: `vh` first, then `dvh` for phones whose address bar changes the height. Older browsers ignore the second line.
- **State classes** carry the state: scripts add or remove `.visible`, `.hidden` and `.active`, and the SCSS decides what those look like. Scripts never set styles directly.

---

## 7. Changing Things

| You want to…              | Do this                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Change text on the résumé | Edit the block's `.html`, e.g. `pages/resume/G-main/default-main/default-main.html`                                     |
| Add or re-rate a skill    | Add or change one row in `skillTable` in [Info.ts](../Info.ts), and put its logo in `~content/png-files/main-skills/` |
| Change a colour           | The page's own `.scss` (`pages/resume/resume.scss`)                                                                      |
| Restyle one block         | That block's `.scss`                                                                                                     |
| Add a timeline card       | Copy a `.timeline-card` in `pages/index/G-main/default-main/default-main.html`                                           |

**Adding a page** (call it `about`) takes five steps:

1. Copy `pages/scale/` to `pages/about/`, and rename `scale.html`, `scale.scss` and `scale.ts` inside it.
2. In `about.ts`, rename the namespace to `About`.
3. Add a `case 'about'` to [Main.ts](../Main.ts) and [Load.ts](../Load.ts).
4. Copy the `copyScale` task in `gulpfile.js` as `copyAbout`, add an `about` script to `package.json`, and add it to `build` and to the `serve` watchers.
5. `npm run about`, then open http://localhost:2000/about.html.

---

## 8. Publishing

GitHub Pages serves this repository as it is, from the root of `main`. That's why `dist/` and the root `.html` files are committed: there's no build step on GitHub's side.

```sh
npm run build
git add -A
git commit -m "What changed"
git push
```

The website updates a minute or two after the push: https://tertiusroach.github.io/development-portfolio_2.00/

---

## 9. Where This Version Fits

| Version                | When           | Stack                          |
| ---------------------- | -------------- | ------------------------------ |
| portfolio-projects     | 2022           | HTML, CSS, JavaScript (Udemy)  |
| web-development_1.00   | 2023           | Course notes                   |
| **2.00 (this one)**    | Dec 2023 → Apr 2024 | gulp, RequireJS, TypeScript, jQuery |
| 3.00                   | Jun → Jul 2024 | webpack, React, TypeScript     |
| 4.00 (TraLogFin)       | Jul 2024 →     | React, Express, MongoDB        |

The blocks, the state classes and the separate landscape and portrait designs all started here and carried into every later version.
