# Makfolio

![Makfolio Banner](/favicon.svg)

A high-performance, dynamic engineering portfolio designed and built specifically for Mirza Kaiyum (Product / Full Stack Engineer). The project acts as both a robust content management system for essays and case studies and a playground showing exactly how fast the modern web can be when engineered carefully.

## 🚀 Technical Stack

- **Framework**: Astro 6 (Running inside SSR mode via Cloudflare Adapter)
- **Styling**: Tailwind CSS v4 + `@tailwindcss/typography`
- **Animations**: `motion` (Framer) for lightweight, high-performance scroll interpolation
- **Data Layer**: Astro 6 Content Layer API (with built-in Markdown loader & zod validation)
- **Deployment**: Vercel / Cloudflare Pages 

## ✨ Key Features

This portfolio avoids heavy runtime frameworks like React. Everything is carefully orchestrated to ship zero-JS where possible:

1. **Window-in-Window Layout**: A brutalist yet modern aesthetic wrapping the layout into a scalable nested window.
2. **Infinite Scroll Pagination**: A custom implementation utilizing native Astro API partials (returning pure `text/html`) stitched iteratively into the DOM using an `IntersectionObserver`. Truly continuous pagination handling unlimited posts without heavy JS bundles.
3. **Dynamic Markdown Headings & Sticky TOC**: A smart Table of Contents sidebar that seamlessly pulls HTML headings mapped from `.md` files at runtime, indenting deep elements dynamically to create a perfect mapping layout.
4. **Automated External Links**: Writings automatically display as native elements if they are hosted locally, but immediately detect `externalUrl` schema configurations and parse their hostnames natively into slick UI pills (i.e., extracting "medium.com" out of raw web urls!)
5. **Tailwind v4 Typographic Control**: Utilizes the modern v4 `@plugin` integration approach to granularly override header hierarchies natively inside `prose` chunks.

## 🧞 Getting Started

Because this uses Astro `v6` with the new unified Content Collections API, you must explicitly sync the data layer occasionally when moving or completely deleting files.

| Command                     | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `npm install`               | Installs exact dependencies                      |
| `npm run dev`               | Starts local dev server                          |
| `npm run build`             | Build your production site (runs SSR steps)      |
| `npx astro sync`            | **IMPORTANT**: Reloads Astro's `zod` typings & cache if a markdown structure changes. |

## 📁 Source Code Organization

- `/src/pages` - All primary routing including index, about, and dynamic `[slug].astro` pages.
- `/src/pages/partials` - Astro isolated HTML endpoint chunks specifically used for HTMX-style infinite load requests without shipping the full document wrapper.
- `/src/content/projects` - Project `md` files dynamically typed directly to `/projects` archive pages.
- `/src/content/writings` - Archival knowledge and engineering thoughts wired directly to `/writings`.
- `/src/content.config.ts` - Central schema validation controlling exactly how markdown fields govern UI representation.

## 👾 Custom Built

Originally bootstrapped and extensively heavily modified to achieve industry standards in DX and UX. Engineered for speed and aesthetic scalability.
