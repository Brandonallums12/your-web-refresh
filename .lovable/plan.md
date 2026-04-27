## Homepage Scroll Animations

### Core request: Pan + Fade on scroll (both directions)

Build a small reusable hook `useInView` (using `IntersectionObserver`) that toggles an `is-visible` class when a section enters the viewport — and **removes it when scrolling back out**, so the animation re-plays both directions (down AND up).

Wrap a `<Reveal>` helper component around major homepage blocks:
- **Hero** copy & buttons
- **Steps** heading + each of the 3 step cards (staggered)
- **Reviews** heading + cards
- **Footer** columns

### Animation: "Pan + Fade"
Add new keyframes to `tailwind.config.ts` and `src/index.css`:
```
pan-fade-in:  opacity 0 → 1, translateY(40px) → 0, slight scale(0.98) → 1
pan-fade-out: reverse, triggers when leaving viewport
```
Duration ~700ms, easing `cubic-bezier(0.2, 0.8, 0.2, 1)` (matches existing `fade-up`). Respects `prefers-reduced-motion`.

### Bonus animation suggestions (I'll include all unless you say otherwise)

1. **Staggered card reveals** — Steps cards 1/2/3 fade in 120ms apart (feels choreographed instead of all-at-once).
2. **Hero parallax glow** — the red blur orb behind the headline drifts slowly on scroll (subtle, ~30px translate).
3. **Headline slide-in from sides** — section h2's slide in horizontally (e.g., "Three steps. No catch." enters from left, "Real sellers, real cash." from right).
4. **Number counter pop on Steps** — the "01 / 02 / 03" tiles scale-in with a tiny bounce when revealed.
5. **Review card lift on scroll-in** — cards translate up + fade with a soft red glow that fades out after settling.
6. **Sticky-progress accent bar** — a thin red bar at the very top fills as you scroll the page (1px tall, no layout shift).

### Files to change
- **NEW** `src/hooks/use-in-view.ts` — IntersectionObserver hook (re-triggers on enter/exit).
- **NEW** `src/components/Reveal.tsx` — wrapper that applies pan-fade + optional `delay` and `direction` props.
- `src/index.css` — add `pan-fade`, `slide-in-left`, `slide-in-right`, reduced-motion guard.
- `tailwind.config.ts` — register new animation utilities.
- `src/components/Hero.tsx` — wrap copy block; add parallax to glow orb.
- `src/components/Steps.tsx` — wrap heading + map staggered Reveals over the 3 cards.
- `src/components/Reviews.tsx` — wrap heading + carousel block.
- `src/components/Footer.tsx` — wrap columns.
- `src/pages/Index.tsx` — optional scroll-progress bar at top.

### Confirm before I build
Defaulting to: **pan-fade everywhere + all 6 bonus effects**. Tell me which bonuses to drop (or "all good") and I'll implement.