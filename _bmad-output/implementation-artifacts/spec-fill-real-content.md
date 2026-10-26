---
title: 'Fill landing page with real content from content.md'
type: 'feature'
created: '2026-10-26'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** `src/prototypes/Portfolio.jsx` is full of lorem ipsum; `content.md` holds the real copy for JS Advocacia e Consultoria Tributária.

**Approach:** Replace placeholders with real content only where `content.md` provides it. Drop sections/items with no source text (Método, Para quem trabalho, 4th credential, Facebook/LinkedIn). Omit e-mail and OAB number until provided. Add a "Advocacia Colaborativa" section. Keep OAB advertising rules (Provimento 205/2021): informative tone, no commercial CTAs, no result promises, no "portfólio".

</frozen-after-approval>

## Implementation Notes
- Rewrote `src/prototypes/Portfolio.jsx`: real copy, flat 6-item services grid, Pilares (titles only), Advocacia Colaborativa section, WHATSAPP_URL/INSTAGRAM_URL constants.
- Removed: Método, Para quem trabalho, Formação (duplicated credentials bar), CTA box, Facebook/LinkedIn, unused icons/imports.
- Copy edits for OAB: dropped "total agilidade", "portfólio do seu escritório" -> "atuação do seu escritório"; CTAs now neutral ("WhatsApp", "Áreas de atuação").
- Pending from client: e-mail, OAB number (comment left in footer).
- Review subagents skipped; lint and build pass.
