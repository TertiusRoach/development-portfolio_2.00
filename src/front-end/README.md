# [Front-end Documentation](https://github.com/TertiusRoach/development-portfolio_2.00)

This directory functions as the [User Interface](https://en.wikipedia.org/wiki/User_interface) component of the application. The purpose of this documentation is to offer a detailed insight into the organization of files and folders, with the goal of promoting clarity to support smooth scalability in projects. The structure is meticulously crafted to reduce the chances of introducing errors in the code. Files are arranged strategically to minimize unnecessary code and ensure a clear understanding of each document's role. The categorization of files is designed to be intuitive, making it easier for both novice and experienced developers to comprehend, particularly as the project's complexity grows.

---

<details>
  <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#pages-directory">Pages Directory</a>
            <ul>
                <li>
                    <a href="#designing">Designing</a>
                </li>
                <li>
                    <a href="#content">Content</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#utilities-folder">Utilities Folder</a>
            <ul>
               <li>
                    <a href="#tools-folder">Tools Folder</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#vendors-folder">Vendors Folder</a>
        </li>
        <li>
            <a href="#subject-here">Subject Here</a>
        </li>
        <li>
            <a href="#my-checklist">My Checklist</a>
        </li>
    </ol>
</details>

---

## Pages Directory

This specifically concerns the [front-end](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end) structure. The [page directory](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages) is at the heart of front-end functionality, and the [index](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index) folder serves as the default testing location. Crafted with meticulous attention to detail, this document prioritizes clear navigation and delivers comprehensive references for each file format, contributing to heightened efficiency and quality in the front-end development process.

### Designing

This [Sass file](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/override-bootstrap.scss), named **override-bootstrap.scss**, acts as a comprehensive override mechanism within the Bootstrap framework, allowing for the customization of targeted designs. Built upon an already established foundational structure, it provides flexibility by enabling the modification of default values. The choice to utilize Bootstrap is influenced by its well-refined text scaling for various resolutions, a problem the framework has effectively addressed over the years. By leveraging Bootstrap, there's no need to reinvent the wheel with another CSS framework, as it has already overcome the roadblocks associated with text scaling. Then there's another [SASS file](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/index/index.scss) specifically crafted for individual pages, applying styles exclusively to the page it occupies. It encapsulates default values for a company's registered colors and logos but operates within a non-global scope and defines defaults for CSS margins and padding on HTML elements: Typically initialized to zero.

### Content

The **~content** folder offers insightful recommendations on optimal resolutions for various file formats, providing rationale for specific image resolutions to maintain consistency. The [content directory](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/~content) houses all the graphical with the following extensions, ico, gif, svg, jpg,png, mp3 and mp4 files. Each file format has a distinct purpose, and through experience, I've discovered that the choice of format significantly influences the outcome based on specific requirements and below this paragraph is a description along with the resolution metadata of the placeholder documents stored in this project.

> 🠋 ICO Files

Placeholder Resolution = **256x256**: Ideal for small graphical representations, typically used as website or application icons.

> 🠋 GIF Files

Placeholder Resolution = **500x500**: Suited for simple animations, logos, and images with limited colors, providing a lightweight solution.

> 🠋 SVG Files

Placeholder Resolution = **500x500**: Perfect for scalable graphics, such as logos and icons, as it maintains clarity at various sizes without loss of quality.

> 🠋 JPG Files

Placeholder Resolution = **1280x720 (720p)**: Well-suited for photographs and images with complex details, balancing quality and compression for efficient storage.

> 🠋 PNG Files

Placeholder Resolution = **3840x2160 (2160p)**: Well-suited for images requiring transparency and sharp details, commonly used for web graphics and logos.

> 🠋 MP4 Files

Placeholder Specifications = **1920x1080 (1080p)**: Excellent for video content, supporting high-quality compression with broad compatibility across platforms. I usually set my videos to 25 frames per second.

---

## Utilities Folder

Description Here

---

## Vendors Folder

Description Here

---

## Subject Here

Description Here

---

## My Checklist

- [x] Get Gulp to work
- [x] Copy HTML with Gulp
- [x] Compile SASS to CSS with Gulp
- [x] Combine Bootstrap with Stylesheet using Gulp
- [x] Compile TypeScript with Gulp
- [x] Implement RequireJS with Gulp
- [x] Re-organize Utilities to import everything in index.js
- [x] Build [Résumé](https://www.youtube.com/watch?v=sQoiM7i5Nqc&list=PLejxfgwRYhwC0ffw3dtP-p-lKD2mYkD2r&index=1&t=128s): `<script>` = resume
- [ ] Place each element inside default-body.html
- [ ] Animate each element inside global-styling.scss

---

[Design Syntax](https://www.compart.com/en/unicode/block/U+25A0)
[🠉](https://www.compart.com/en/unicode/U+1F809)
[🠊](https://www.compart.com/en/unicode/U+1F80A)
[🠋](https://www.compart.com/en/unicode/U+1F80B)
[🠈](https://www.compart.com/en/unicode/U+1F808)

---
