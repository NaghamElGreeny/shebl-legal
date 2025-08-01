# ⚖️ Shebl Legal Website

A modern legal consultancy website with bilingual support, built using the latest web technologies.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + SCSS
- **Internationalization (i18n):** next-intl
- **State Management:** Zustand
- **Animations:** AOS (Animate on Scroll)
- **HTTP Client:** Axios
- **Cookies Handling:** js-cookie
- **Utility Class Handling:** clsx

🌐 Supports both Arabic and English using `next-intl` for dynamic translations.

---

## 📁 Main Folder Structure


├── src/
│   ├── app/               # App routing structure (Next.js App Router)
│   │   ├── [locale]/      # Multi-language support
│   │   └── globals.scss   # Global styles
│   ├── components/        # Reusable UI and Section components
│   │   ├── Sections/      # Page-specific sections
│   │   ├── layout/        # Navbar, Footer, Wrapper components
│   │   └── ui/            # Generic UI components (Button, Popup, etc.)
│   ├── styles/            # SCSS style files per section/component
│   ├── i18n/              # Internationalization logic
│   └── middleware.ts      # Next.js middleware for locale detection

---
📦 This project uses **npm** as the package manager.
