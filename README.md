# tlaktir — Nuxt 4 Project

Creator support platform with **Dark Mode** and **i18n** (Indonesian & English).

## Tech Stack

| Tool | Version |
|------|---------|
| Nuxt | ^4.4.7 |
| Vue | ^3.5.13 |
| Tailwind CSS | ^4.3.0 |
| DaisyUI | ^5.5.23 |
| @nuxtjs/tailwindcss | ^6.13.2 |
| @nuxtjs/i18n | ^9.5.5 |

## Project Structure

```
tlaktir/
├── assets/css/main.css          # Global styles + dark mode overrides
├── components/
│   ├── StatCard.vue
│   └── SupporterCard.vue
├── composables/
│   └── useDarkMode.ts           # Dark mode toggle + localStorage persist
├── i18n/
│   ├── i18n.config.ts
│   └── locales/
│       ├── en.json              # English translations
│       └── id.json              # Indonesian translations
├── layouts/
│   └── default.vue              # Header with dark toggle + lang switcher
├── pages/
│   ├── index.vue                # Creator profile page
│   └── support.vue              # Checkout page
├── plugins/
│   └── theme.client.ts          # Init dark mode from localStorage on load
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

## Setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run preview
```

## Features

### 🌙 Dark Mode
- Toggle button in the top header (sun/moon icon)
- Preference saved to `localStorage` — persists on page reload
- Respects system `prefers-color-scheme` on first visit
- Smooth `transition-colors` on all surfaces

### 🌐 i18n — Indonesian & English
- Language switcher (ID / EN) in the top header
- Default locale: **Indonesian (id)**
- All UI strings translated: nav, footer, stats, support page
- Locale preference saved via cookie (`@nuxtjs/i18n` `detectBrowserLanguage`)

## Pages

- `/` — Creator profile page
- `/support` — Support/checkout page
