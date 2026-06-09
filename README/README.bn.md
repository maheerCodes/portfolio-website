# portfolio-website

🌐 Language:
[English](/README/README1.md) | [বাংলা](/README/README.bn.md)

---
## 🗂️ CSS Architecture & File Structure

### 1️⃣ CSS File Organization Strategy
এই প্রজেক্টে CSS কে একাধিক ছোট, দায়িত্বভিত্তিক ফাইলে ভাগ করা হয়েছে, যাতে কোড maintain করা সহজ হয় এবং future scalability বজায় থাকে।

- `variables.css` → সব global CSS variables (colors, fonts, spacing, radius)
- `fonts.css` → সব `@font-face` এবং font related configuration
- `base.css` → CSS reset, body, typography, global element styles
- `layout.css` → grid, flex, container, section structure
- `components.css` → reusable UI components (button, card, navbar)
- `animations.css` → keyframes ও animation utility classes
- `pages.css` → common page-level styles
- `home.css` → শুধুমাত্র home page–এর জন্য specific styles
- `projects.css` → projects section/page–এর জন্য styles

---

### 2️⃣ CSS Import Order (Why Order Matters)
CSS ফাইলগুলোর order খুব গুরুত্বপূর্ণ, কারণ পরের ফাইল আগের ফাইলকে override করতে পারে।

বর্তমান development phase-এ `style.min.css` ফাইলে নিচের order অনুসরণ করা হয়েছে:

1. `variables.css`
2. `fonts.css`
3. `base.css`
4. `layout.css`
5. `components.css`
6. `animations.css`
7. `pages.css`
8. `home.css`
9. `projects.css`

এই order নিশ্চিত করে:
- variables আগে load হয়
- base rules আগে আসে
- layout ও component পরে আসে
- page-specific CSS সবার শেষে override করে

---

### 3️⃣ Development vs Production CSS Strategy
Development এর সময়:
- Multiple CSS file ব্যবহার করা হয়েছে readability এবং maintainability এর জন্য
- `@import` ব্যবহার করা হয়েছে testing ও debugging সহজ করার জন্য

Production এর সময়:
- সব CSS file merge করে একটিমাত্র `style.min.css` বানানো হবে
- `@import` remove করা হবে
- Unused CSS ও comments remove করা হবে
- Final CSS minified করে performance optimize করা হবে

এই approach ব্যবহার করার ফলে:
- Development fast হয়
- Code clean থাকে
- Production এ website load দ্রুত হয়
## 📂 JavaScript Folder Structure & Strategy

এই প্রজেক্টে JavaScript ফাইলগুলো দায়িত্বভিত্তিকভাবে আলাদা করা হয়েছে, যাতে কোড clean, readable এবং future-proof থাকে।

### 🗃️ JS Folder Structure
```txt
js/
├── main.js        (entry point)
├── utils.js       (helper functions)
├── animations.js  (scroll & UI animations)
├── form.js        (contact form logic)
└── main.min.js    (production build)
