---
title: 'Rebuild prototype templates with real JS Advocacia brand identity'
type: 'feature'
created: '2026-10-21'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: ['{project-root}/acervodados/README.md', '{project-root}/acervodados/index.css']
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The three existing prototype landing pages (`src/prototypes/Institucional.jsx`, `Consultivo.jsx`, `Contencioso.jsx`) are generic placeholders with mismatched inline-styled palettes (cream/serif, dark blue/Inter, red/Arial) that have no relation to the client's actual brand. Real brand research (client questionnaire + 11 Instagram post screenshots) has been distilled into `acervodados/README.md` and `acervodados/index.css` — a strict navy/gold/white, minimalist, formal identity for a tax-law firm (JS Advocacia e Consultoria Tributária).

**Approach:** Rewrite all three prototype files as brand-accurate landing-page variations (institutional / consultive / litigation framing) sharing one consistent visual language from the research: navy (`#0a2f66`) dominant sections with subtle noise texture, gold (`#b8872f`) as accent only (never a fill), white/silver neutral sections with thin gold rule lines, thin borders, rounded cards, bold sans-serif headlines. Port the color tokens from `acervodados/index.css` into `src/index.css` as CSS custom properties, then consume them via Tailwind arbitrary-value classes (e.g. `bg-[var(--color-primary)]`) — matching the Tailwind-utility convention already used in `src/Home.tsx`, replacing the inline-style convention the placeholders used. Keep `src/App.tsx` and `src/Home.tsx` routing/selector structure as-is; only the three prototype components' internals change.

</frozen-after-approval>

## Implementation Notes

- Ported brand tokens into `src/index.css` (`--color-primary`, `--color-gold`, `--color-silver`, `--color-ink`, `--font-brand`, `--radius-card`, `--radius-pill`) plus a `.textured-navy` utility replicating the Instagram carousel-cover grain.
- Rewrote `src/prototypes/Institucional.jsx` (primary brand showcase: hero, "Quem sou eu", pilares, 9 serviços, pull-quote, contato), `Consultivo.jsx` (empresário-focused preventive-consulting funnel), and `Contencioso.jsx` (litigation-defense funnel, real credentials instead of fabricated stats — the firm is new and has no case-count history per `acervodados/README.md` §8).
- Kept `src/App.tsx` / `src/Home.tsx` selector structure unchanged (per approved Open Questions decision); only updated `Home.tsx`'s heading text to the real brand name for consistency.
- `index.html`: `lang="pt-BR"`, real title, meta description, and a Google Fonts link for Poppins (the `--font-brand` token referenced it but nothing loaded it).

## Review Triage Log

Blind-hunter review on the ~23.2 kB diff (floor N=5, found 11). Verdicts:

- Home.tsx brand/title mismatch with the rebranded prototypes — real, `medium` — **patch**: updated heading text in `src/Home.tsx`.
- `index.html` wrong `lang`, stale title, no meta description — real, `medium` — **patch**: fixed in `index.html`.
- `--font-brand` referenced Poppins/Montserrat but neither was ever loaded — real, `medium` — **patch**: added Google Fonts `<link>` for Poppins in `index.html`.
- `--radius-pill`/`--radius-card` used via `var(..., fallback)` but never defined in `:root` — real, `low` — **patch**: defined both tokens in `src/index.css`.
- No `<main>` landmark wrapping page content in any of the 3 prototypes — real, `low` — **patch**: wrapped body sections in `<main>` in all three.
- External WhatsApp/Instagram links had no new-tab indication for assistive tech — real, `low`, fix was simple — **patch**: added `aria-label` noting "(abre em nova aba)" on all 6 occurrences.
- `Consultivo.jsx` header used the navy/textured treatment while `Institucional.jsx` and `Contencioso.jsx` both used the white/silver header — real, `medium` (visible inconsistency across pages of the same brand) — **patch**: standardized `Consultivo.jsx`'s header to the white/silver pattern, added a `dark` variant to its `LogoBadge` for use in navy sections.
- While fixing the above, found `Contencioso.jsx`'s `LogoBadge` had no `dark` variant and was used at `text-[var(--color-primary)]` (navy) inside its `textured-navy` footer — navy-on-navy, invisible — real, `high` (footer logo literally invisible) — **patch**: added `dark` variant, used it in the footer. Caught via visual browser verification after the header fix, not by the reviewer.
- Color contrast concern for `--color-gold-light` (#d4a857) text and `slate-200` body text over `textured-navy` (#0a2f66) — **false**: computed WCAG relative-luminance contrast ratios are ~5.92:1 and ~10.57:1 respectively, both clearing the 4.5:1 AA threshold for normal text.
- Hardcoded WhatsApp/Instagram contact values and a copy-pasted `LogoBadge` duplicated across all 3 prototype files — real but **defer**: user explicitly asked not to worry about code organization this round; logged in `deferred-work.md`.
- `SERVICOS` list content duplicated with slightly different wording between `Institucional.jsx` and `Consultivo.jsx` — real but **defer**, same reorganization-later rationale; logged in `deferred-work.md`.
- CTA links missing per-page prefilled `?text=` message — real enhancement opportunity, not a defect — **defer**; logged in `deferred-work.md`.
