# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Intermediate cubers who already solve with CFOP and know some algorithms. They hold a physical cube in one hand and the phone or keyboard in the other. The job: drill recognition and recall of F2L, OLL and PLL cases until the alg comes without looking it up.

## Product Purpose

A flashcard trainer for CFOP cases. A case picture is shown, the user recalls or executes the alg on a real cube, then grades themselves. SM-2 scheduling decides what comes next. Success is a user who recognizes a case and recalls its alg faster each week.

## Positioning

Honor-code recall, not cube input. Other trainers ask for moves typed or read from a smart cube. This one trusts the user to grade, so any cube works. Every picture is computed from the solution alg plus a mask, never hand-drawn, so picture and alg cannot disagree. No accounts, no server, works offline after first load.

## Operating Context

- One hand holds the cube, the other taps or presses keys. Sessions are short and repeated daily.
- Modes: Learn (SRS, graded), Drill (endless, ungraded), Verify (execute on a solved cube held yellow up, green front, then compare the expected state), Gallery (browse every case).
- Sets: Basic, Advanced and Expert F2L (from J Perm's F2L sheet), 2-Look OLL, Full OLL, 2-Look PLL, Full PLL.
- Optional 3D viewer animates each alg move by move.
- Progress saves on every grade. Export and import as JSON is the only way to move data between devices.

## Capabilities and Constraints

- Static site, deployed to Cloudflare Workers static assets at cfop.paragone.dev.
- TypeScript, Vite, vanilla DOM. Zero production dependencies.
- No analytics, telemetry, or runtime network requests.
- Case ids are frozen: they key stored user progress.
- Terminology: "case", "alg", "set", "AUF", "hint" (teaching text), "note" (the user's own text). Standard cubing notation, explained in the in-app legend.
- Not in scope: timer, scramble generator, solve reconstruction, webcam or bluetooth cube input, accounts, sync.

## Brand Commitments

- Name: CFOP Driller.
- Logo pack designed outside the app: `src/assets/logo-mark.svg`, favicons and icons in `public/`. The accent color matches the mark's violet.
- Full OLL names and top algs follow CubeHead's "OLL in one month" PDF. CubeHead is credited.
- Hints are owner-written, in `docs/hints.md`.

## Evidence on Hand

- Owner hints and notation legend: `docs/hints.md`.
- OLL source mapping: `docs/oll-mapping.md`.
- Algorithm data: `src/data/algorithms.ts`.
- No testimonials, user counts, reviews or benchmarks exist. Do not invent any.

## Product Principles

1. The cube in hand comes first. Every screen is used one-handed, mid-solve.
2. Recall before reveal. Nothing on screen gives away the alg before the user asks.
3. The picture is the truth, and it is computed, never drawn.
4. Local and private. The user's progress never leaves their device unless they export it.

## Accessibility & Inclusion

- WCAG 2.2 AA: contrast, visible focus, labeled controls.
- Keyboard first: space reveals, 1 unknown, 2 known, n toggles name, Enter is Next in Drill. In 3D, left and right step, down and up jump to start and end.
- One-handed phone use: primary actions in the thumb zone.
- Color-blind safe: cube stickers and stats must stay distinguishable without relying on hue alone.
