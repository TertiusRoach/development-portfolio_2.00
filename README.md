# [Development Portfolio](https://tertiusroach.github.io/development-portfolio_2.00/)

Outlined below is my development process, presenting essential details including crucial links, valuable resources, and necessary terminal commands for installing key packages pivotal to optimizing my workflow. These meticulously curated elements serve as the foundation of my development environment, guaranteeing a streamlined and efficient process throughout the entire lifecycle from conception to implementation.

---

<details>
  <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#project-installation">Project Installation</a>
            <ul>
                <li>
                    <a href="#front-end-development">Front-end Development</a>
                </li>
                <li>
                    <a href="#back-end-development">Back-end Development</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#websites">Websites</a>
            <ul>
                <li>
                    <a href="#index-pages">Index Page</a>
                </li>
                <li>
                    <a href="#résumé-pages">Résumé Page</a>
                </li>
            </ul>
        </li>
    </ol>
</details>

---

## Project Installation

To utilize the command terminals listed below, ensure you have [Node.js](https://nodejs.org/en) installed. I employ [Gulp](https://en.wikipedia.org/wiki/Gulp.js) for seamless task automation, optimizing repetitive processes. [Sass](<https://en.wikipedia.org/wiki/Sass*(style*sheet_language)>) serves as a styling tool, enhancing syntax readability, while [Bootstrap](<https://en.wikipedia.org/wiki/Bootstrap*(front-end_framework)>) elevates the visual appeal of the interface. [jQuery](https://en.wikipedia.org/wiki/JQuery) streamlines DOM manipulation, and [TypeScript](https://en.wikipedia.org/wiki/TypeScript) contributes to code scalability, readability, and maintainability. This approach ensures efficiency, flexibility, and a polished user experience in the applications I develop.

> 🠋 Executing this terminal command generates a [package.json](https://nodejs.org/en) file.

    npm init -y

> 🠋 These are the primary [front-end](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end) packages used in this project.

    npm install gulp
    npm install sass
    npm install jquery
    npm install bootstrap
    npm install typescript

> 🠋 These packages constitute the core [back-end](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/back-end) components utilized in this project.

    npm install bcrypt
    npm install express
    npm install mongodb

> 🠋 Install this package to use jQuery with TypeScript

    npm install --save-dev @types/jquery

Please note: If you encounter any issues with [Gulp](https://en.wikipedia.org/wiki/Gulp.js). Restart [Visual Studio Code](https://code.visualstudio.com/download) and manually open the correct folder by clicking on File **->** Open Folder or use the **Ctrl + O** shortcut. This will resolve the glob error trying to execute the code within, **root/node_modules/.bin**.

> 🠋 The [gulpfile.js](https://marketplace.visualstudio.com/items?itemName=nickdodd79.gulptasks) document encodes and transfers development files from source to distribution.

    npm install --save-dev gulp
    npm install --save-dev gulp-sass
    npm install --save-dev gulp-clean
    npm install --save-dev gulp-concat
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-rename
    npm install --save-dev gulp-ignore
    npm install --save-dev gulp-htmlmin
    npm install --save-dev gulp-uglifycss
    npm install --save-dev gulp-typescript
    npm install --save-dev gulp-sourcemaps
    npm install --save-dev gulp-delete-file
    npm install --save-dev gulp-append-prepend
    npm install --save-dev gulp-string-replace
    npm install --save-dev gulp-remove-html-comments

> 🠋 These packages are currently optional for development but add value to the process.

    npm install --save-dev @google/clasp

### [Front-end Development](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end)

The primary source file, [index.html](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/index/index.html), establishes a connection with the [front-end.js](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/front-end.js) file located within the front-end directory. This linkage initiates the execution flow through the following modules.

> [utilities](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/utilities)/[Main.ts](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/utilities/Main.ts) **->** [Load.ts](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/utilities/Load.ts) **->** [pages](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages)/[index.ts](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages).

The structural composition of these modules is subsequently segmented into eight distinct sections. This ordering mirrors the arrangement specified in the CSS z-index, directly embedded in the HTML code within [default-body.html](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/index/A-body/default-body/default-body.html). To ensure a systematic approach to development, the directories are thoughtfully organized alongside the corresponding block with their own intricate design. This encourages cohesive usage of files in groups, enhancing efficiency in front-end project development.

> [body](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/A-body) **->** [overlay](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/B-overlay) **->** [header](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/C-header) **->** [footer](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/D-footer) **->** [leftbar](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/E-leftbar) **->** [rightbar](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/F-rightbar) **->** [main](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/G-main) **->** [data](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/H-data)

Now, let's delve into scaling projects. For scalability, TypeScript and Sass are employed, as they outperform plain [CSS](https://en.wikipedia.org/wiki/CSS) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) when projects expand. The latter pair can become unwieldy and challenging to maintain as the project scope increases. TypeScript provides enhanced static typing, while Sass matches the same scope of the [HTML](https://en.wikipedia.org/wiki/HTML) page.

### [Back-end Development](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/back-end)

Back-end development refers to the process of building and maintaining the server-side of a website or web application. It involves designing, implementing, and managing the server, databases, and application logic that enable the functionality and data management of the system. Back-end developers work with server-side languages such as Python, Ruby, PHP, and Java, as well as frameworks like Django, Ruby on Rails, and Laravel. Their primary focus is on ensuring that data is securely stored, retrieved, and processed, and they are responsible for managing server infrastructure, databases, and server-side application code. Back-end development is integral to the overall functionality of a website, handling tasks such as database management, user authentication, and server-side processing, which contribute to the seamless functioning of the entire web application.

---

## Websites

### Index Pages

[Index: Offline](http://127.0.0.1:5500/index.html)

[Index: Website](https://tertiusroach.github.io/development-portfolio_2.00/)

### Résumé Pages

[Résumé: Offline](http://127.0.0.1:5500/resume.html)

[Résumé: Website](https://tertiusroach.github.io/development-portfolio_2.00/resume)

### Scale Pages

[Scale: Offline](http://127.0.0.1:5500/scale.html)

[Scale: Website](https://tertiusroach.github.io/development-portfolio_2.00/scale)

---

[Design Syntax](https://www.compart.com/en/unicode/block/U+25A0)
[🠉](https://www.compart.com/en/unicode/U+1F809)
[🠊](https://www.compart.com/en/unicode/U+1F80A)
[🠋](https://www.compart.com/en/unicode/U+1F80B)
[🠈](https://www.compart.com/en/unicode/U+1F808)

---
