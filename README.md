# Astro + Tailwind Business Starter

Reusable template starter for small business brochure websites, based on your Perennial Web Studio approach.

## Stack

- Astro 5
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Component-first sections

## Quick Start

1. Install dependencies:
   - `npm install`
2. Start development:
   - `npm run dev`
3. Build production:
   - `npm run build`

## What To Reuse

- `src/layouts/BaseLayout.astro` for all pages
- `src/components/site/*` for shared chrome (header/footer)
- `src/components/sections/*` for page sections
- `src/data/site.ts` for business-specific content

## New Client Workflow

1. Copy this folder to a new project.
2. Update `src/data/site.ts` with client details.
3. Adjust sections in `src/pages/index.astro` (add/remove/reorder).
4. Tweak brand colors in `src/styles/global.css`.
