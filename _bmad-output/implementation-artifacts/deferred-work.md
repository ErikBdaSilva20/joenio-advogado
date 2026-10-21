- source_spec: `_bmad-output/implementation-artifacts/spec-landing-page-brand-templates.md`
  summary: Extract shared WhatsApp/Instagram contact constants and a single shared `LogoBadge` component instead of duplicating them across `Institucional.jsx`, `Consultivo.jsx`, and `Contencioso.jsx`.
  evidence: User explicitly deprioritized code organization for this round ("não se preocupar muito com código, vamos reorganizar depois"); duplication is real (number/handle hardcoded 2x per file, LogoBadge copy-pasted in all 3 files) but reorganizing is planned as a follow-up pass once a template direction is chosen.

- source_spec: `_bmad-output/implementation-artifacts/spec-landing-page-brand-templates.md`
  summary: Add per-page prefilled `?text=` messages to the WhatsApp CTA links (distinct message per funnel: institucional/consultivo/contencioso) instead of the bare wa.me link.
  evidence: Low-cost conversion improvement identified in review; out of scope for the brand-fidelity goal of this spec, no user request for it yet.

- source_spec: `_bmad-output/implementation-artifacts/spec-landing-page-brand-templates.md`
  summary: `SERVICOS` content lists in `Institucional.jsx` and `Consultivo.jsx` duplicate several service entries with slightly different wording; consider a shared services data module once a single template direction is chosen.
  evidence: Same duplication-avoidance tradeoff as the LogoBadge/contact-constants item above — deferred together since the user wants code reorganization handled in a later pass, not this one.
