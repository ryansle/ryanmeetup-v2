# Design System Guide

This document captures the design tokens, theme conventions, and component usage
needed to build UI that matches this app’s look and feel.

## Core Tokens

### Text
- Primary: `text-black` or `text-black/90`
- Secondary: `text-black/70`
- Tertiary: `text-black/60`
- Dark mode primary: `dark:text-white`
- Dark mode secondary: `dark:text-white/70`
- Dark mode tertiary: `dark:text-white/60`

### Surfaces
- Soft card: `bg-white/80 dark:bg-white/5`
- Solid card: `bg-white/90 dark:bg-white/5`
- High contrast popup: `bg-white/95 dark:bg-white/95`

### Borders
- Default: `border border-black/10 dark:border-white/10`
- Emphasis: `border-black/20 dark:border-white/20`

### Shadows
- Low elevation: `shadow-sm`
- Floating: `shadow-xl`
- Hero: `shadow-[0_25px_50px_-40px_rgba(0,0,0,0.6)]`

### Hover Affordance
- Lift: `hover:-translate-y-1`
- Border emphasize: `hover:border-black/30 dark:hover:border-white/40`

### Typography
- Meta label: `text-xs font-semibold uppercase tracking-[0.2em–0.3em]`
- Headings: `Heading` + `title` class, often `font-cooper`
- Body copy: `Text` with `text-black/70 dark:text-white/70`

## Component Usage

### Buttons
Use `components/global/Button.tsx`.
- Primary: strong contrast, use `variant="primary"`.
- Secondary: light outline in light mode, use `variant="secondary"`.
- Outline: minimal emphasis, use `variant="outline"`.
- Ghost: text only, use `variant="ghost"`.

### Cards
Use `components/global/Card.tsx`.
- `variant="soft"` or `variant="solid"` for most cards.
- Avoid custom backgrounds unless required for a unique section.

### Pill
Use `components/global/Pill.tsx` for tags and labels.

### Typography
Always use `Heading` and `Text` from `components/global`.
Avoid raw `h1`/`p` unless necessary.

### Inputs
Use `components/global/Input.tsx` and `components/global/Textarea.tsx`.
Required labels keep the asterisk inline and reduce tracking on mobile.

## Theme Guidance
- Prefer `resolvedTheme` when swapping images based on theme.
- Light mode should be soft and readable, not high‑contrast.
- Dark mode should not flip to bright unless explicitly requested.

## Layout Patterns
- Sections often use `space-y-6` or `space-y-12`.
- Grids usually use `gap-4` or `gap-6`.
- Use `sm:` breakpoints for early responsiveness and to keep mobile readable.

## Common Class Snippets

### Soft Card Container
```
rounded-2xl border border-black/10 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5
```

### Meta Label
```
text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60
```

### Hoverable Tile
```
transition hover:-translate-y-1 hover:border-black/30 dark:hover:border-white/40
```

## Reference Files
- Buttons: `components/global/Button.tsx`
- Cards: `components/global/Card.tsx`
- Typography: `components/global/Heading.tsx`, `components/global/Text.tsx`
- Pills: `components/global/Pill.tsx`
- Inputs: `components/global/Input.tsx`, `components/global/Textarea.tsx`
- Hero + stats: `components/home/Landing.tsx`
- Sponsor marquee: `components/sponsors/SponsorCarousel.tsx`
- Map markers + popups: `components/map/Map.tsx`

