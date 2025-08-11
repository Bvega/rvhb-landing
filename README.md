# RVHB Landing (Next.js + Tailwind)

High‑conversion landing page for RVHB “ONE TOUCH” room blocks.

## Quick start

```bash
# 1) Install deps
npm i

# 2) Dev server
npm run dev
# open http://localhost:3000
```

## Configure

- **Contact CTAs**: Edit the link in `components/Contact CTAsEmbed.tsx` and `components/CTABand.tsx` (`https://calendly.com/your-calendly/15min` → your link).
- **Contact**: Email and phone live in `Hero.tsx` and `CTABand.tsx`.
- **Analytics**: Optionally add Google Analytics by creating `.env.local`:
  ```env
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
  ```

## Structure
- `app/` — App Router pages
- `components/` — UI sections (Hero, Value, HowItWorks, Benefits, Testimonials, FAQ, CTA, CookieBanner)
- `lib/ga.ts` — GA helpers
- `tailwind.config.ts`, `postcss.config.js`, `app/globals.css` — Tailwind setup

## Notes
- Accessibility‑first (skip link, contrasts, semantic headings).
- Lightweight CSS via Tailwind.
- Replace testimonial placeholders once permissions are confirmed.

## Deploy to Netlify

1. Push this project to GitHub.
2. In Netlify, click **Add new site → Import an existing project**.
3. Connect your GitHub repo and select it.
4. Build settings (Netlify auto-detects Next.js):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Add environment variables if needed (e.g., `NEXT_PUBLIC_GA_MEASUREMENT_ID`).
5. Deploy. The **@netlify/plugin-nextjs** in `netlify.toml` optimizes routing and SSR as needed.


### Environment
Create `.env.local` if needed:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-netlify-site.netlify.app
```


## Pre‑deploy Checklist
- [ ] Replace testimonial placeholders (optional for launch)
- [ ] Add GA ID to `.env.local` (optional)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your Netlify URL
- [ ] Run `npm run build` locally (should pass without errors)
- [ ] Quick Lighthouse check (Performance/Accessibility/SEO ≥ 90)

## Accessibility & SEO Notes
- Semantic headings (H1 on Hero; section H2s)
- Skip link, focus-visible rings, proper alt text
- JSON‑LD schema (`ProfessionalService`) included
- `robots.ts` and `sitemap.ts` present; canonical via `metadata.alternates`
- Open Graph + Twitter tags present (uses `/og.png` placeholder)


## VS Code Setup (Windows-friendly)
1. Install **Node.js 20 LTS** (or use **nvm-windows** and run `nvm use 20`).
2. Open **VS Code** → **File → Open Folder...** → select this project.
3. Install recommended extensions when prompted (ESLint, Prettier, Tailwind CSS, DotENV).
4. Create `.env.local` from `.env.local.example` and adjust values if needed.
5. In VS Code, open the integrated terminal (**Ctrl+`**) and run:
   ```bash
   npm install
   ```
6. Start in debug mode: press **F5** (uses **Next.js: debug server** launch config).  
   Or run:
   ```bash
   npm run dev
   ```
7. Visit **http://localhost:3000** and test.
8. (Optional) Build check:
   ```bash
   npm run build
   ```
