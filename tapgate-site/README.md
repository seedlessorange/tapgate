# TapGate Website

Marketing website for TapGate — a smart gate opener for European homeowners. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (13 sections)
│   ├── layout.tsx                  # Root layout with Nav + Footer
│   ├── globals.css                 # Tailwind v4 theme + base styles
│   ├── compatibility/page.tsx      # Compatibility quiz
│   ├── products/
│   │   ├── tapgate-gateway/page.tsx
│   │   └── home-set/page.tsx
│   ├── solutions/
│   │   ├── homeowners/page.tsx
│   │   ├── rentals/page.tsx
│   │   └── small-buildings/page.tsx
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   ├── support/page.tsx
│   ├── contact/page.tsx
│   ├── community/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── HeroGateAnimation.tsx       # Interactive gate toggle
│   ├── BenefitTriplet.tsx
│   ├── StatsBar.tsx
│   ├── FAQ.tsx                     # Reusable accordion
│   ├── PricingCard.tsx             # Reusable pricing card
│   ├── CommunitySignup.tsx         # GDPR-compliant email capture
│   └── CTASection.tsx
```

## Brand

See [BRAND.md](./BRAND.md) for colors, typography, voice, and identity guidelines.

## Editing content

All page content is inline in the page files — no CMS. To edit copy, open the relevant `page.tsx` and modify the JSX directly.

### Adding a new product

1. Create `src/app/products/[slug]/page.tsx`
2. Follow the pattern in `tapgate-gateway/page.tsx`
3. Add a nav link in `src/components/Nav.tsx`
4. Add a footer link in `src/components/Footer.tsx`
5. Add pricing card on the pricing page

### Adding a supported gate brand

Update the brands array in `src/app/compatibility/page.tsx`. See [COMPATIBILITY.md](./COMPATIBILITY.md) for the full quiz logic.

## French localization roadmap

The site is structured for future `next-intl` integration:

1. Install `next-intl`: `npm install next-intl`
2. Create `/content/en/` and `/content/fr/` directories with translation JSON files
3. Configure middleware for locale detection
4. Wrap pages with the translation provider
5. Replace hardcoded strings with `t('key')` calls

The page structure and component architecture don't need to change — only the copy strings.

## Forms

All forms currently POST to `https://formspree.io/f/YOUR_FORM_ID`. To activate:

1. Create a Formspree account
2. Create forms for: contact, community signup, compatibility inquiry
3. Replace `YOUR_FORM_ID` in the form action URLs

## Deployment

Hosted on Vercel. Push to `main` to deploy.

```bash
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
```

## Placeholders

See [PLACEHOLDERS.md](./PLACEHOLDERS.md) for every placeholder image that needs a real asset.
