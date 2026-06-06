# portfolio-website

🌐 Language:
[English](README.md) | [বাংলা](/README/README.bn.md)

---
## 🗂️ CSS Architecture & File Structure

### 1️⃣ CSS File Organization Strategy

In this project, the CSS has been divided into multiple small, responsibility-based files to make the code easier to maintain and ensure future scalability.

* `variables.css` → Contains all global CSS variables (colors, fonts, spacing, border radius)
* `fonts.css` → Contains all `@font-face` declarations and font-related configurations
* `base.css` → CSS reset, body styles, typography, and global element styles
* `layout.css` → Grid, flexbox, container, and section structure styles
* `components.css` → Reusable UI components (buttons, cards, navbar, etc.)
* `animations.css` → Keyframes and animation utility classes
* `pages.css` → Common page-level styles
* `home.css` → Styles specific to the home page only
* `projects.css` → Styles for the projects section/page

---

### 2️⃣ CSS Import Order (Why Order Matters)

The order of CSS files is very important because later files can override styles from earlier files.

During the current development phase, the following order is used in `style.min.css`:

1. `variables.css`
2. `fonts.css`
3. `base.css`
4. `layout.css`
5. `components.css`
6. `animations.css`
7. `pages.css`
8. `home.css`
9. `projects.css`

This order ensures that:

* Variables are loaded first
* Base styles are applied before everything else
* Layout and component styles are loaded afterward
* Page-specific CSS can override previous styles when necessary

---

### 3️⃣ Development vs Production CSS Strategy

#### During Development:

* Multiple CSS files are used for better readability and maintainability
* `@import` is used to simplify testing and debugging

#### During Production:

* All CSS files will be merged into a single `style.min.css`
* All `@import` statements will be removed
* Unused CSS and comments will be removed
* The final CSS will be minified for optimal performance

Benefits of this approach:

* Faster development workflow
* Cleaner and more organized codebase
* Faster website loading speed in production

---

## 📂 JavaScript Folder Structure & Strategy

In this project, JavaScript files are separated based on responsibilities to keep the code clean, readable, maintainable, and future-proof.

### 🗃️ JS Folder Structure

```txt
js/
├── main.js        (entry point)
├── utils.js       (helper functions)
├── animations.js  (scroll & UI animations)
├── form.js        (contact form logic)
└── main.min.js    (production build)
```
