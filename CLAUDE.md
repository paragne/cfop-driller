# CFOP Driller

Flashcard trainer for Rubik's Cube CFOP. Static site, no backend.
Deployed to Cloudflare Workers static assets at cfop.paragone.dev.
Spec: SPEC.md. Design: DESIGN.md, PRODUCT.md. Decisions: docs/DECISIONS.md.

@docs/STATE.md

## Stack
- TypeScript strict, no any. Vite. Vanilla DOM. Vitest.
- No framework, state library, UI library, or CSS framework.
- Zero production dependencies. Ask before adding any.

## Commands
- npm run dev: dev server, localhost only (VS Code forwards the port)
- npm run check: tsc --noEmit, eslint, vitest run
- npm run build: tsc and vite build to dist

## Layout (module boundaries are load-bearing, do not cross them)
- src/data/algorithms.ts: every case. Pure data, hand-verified. A case exists once; set membership is a tag.
- src/lib/: about 50 pure modules (session, queue, verify, cross-*, mat4, prefs, progress-*, and more). No DOM, no localStorage, no imports from src/ui. They may import types and CASE_SETS from src/data/.
- src/lib/cube.ts: facelet model and move engine. No imports from src/data; only types from notation.ts.
- src/lib/notation.ts: move parser. Pure.
- src/lib/case-state.ts: Case to display state (setup, normalize, mask). Pure.
- src/lib/render.ts: cube state to SVG string. No app state.
- src/lib/srs.ts: SM-2. Pure. Never touches storage.
- src/lib/storage.ts: the only file that may reference localStorage.
- src/ui/: DOM. The only place for querySelector and addEventListener.
- src/ui/three-d/: WebGL 3D viewer. Own entry three-d.html via src/ui/three-d/main.ts.
- src/main.ts: wiring only.
Vite builds three entries: index.html, contact-sheet.html, three-d.html.
Case images are computed from the solution alg plus a mask, never stored.

## Rules
- No file over 200 lines (src/data/ exempt).
- No file named utils, helpers, common, shared, misc, or index (entry points excepted).
- No any, no as casts to silence the compiler, no @ts-ignore.
- No abstraction with one caller. No options object with fewer than three fields.
- No error handling for impossible states. Throw on programmer error. Handle only corrupt localStorage and bad import files.
- Comments explain why, never what. No dead code, commented-out code, TODO comments, or console.log.
- Existing case ids are frozen. They key stored user progress.
- Do not modify src/data/algorithms.ts without stating which case changed and why.
- No analytics, telemetry, or runtime network requests. Must work offline after first load.
- references/ is gitignored and may not exist on this machine. Never look there unless I name a file in it. Source material comes from the prompt or a path I give.
- Case.hint is the owner's hint data, never displayed. It reaches user notes only through Load My Hints, which fills empty notes and never overwrites one.

## Testing
- cube.ts has provable correctness. Test it hard: every move x4 is identity, (R U R' U') x6 is identity, Sune has order 6.
- For every case: apply inverse(solution), then solution, result must be solved.
- Parser round-trips. srs.ts: failure resets interval to 1, ease floors at 1.3, intervals grow on repeated success.
- U turns in F2L data cannot be caught by tests. They are verified by hand.
- If a test fails, diagnose first. Say whether code or test is wrong and wait for my decision before editing a test.
- A test that cannot fail is not coverage. Say so.

## Workflow
- Propose a plan before writing anything over about 50 lines. Wait for approval.
- One logical change per commit, conventional format, no Co-Authored-By trailers.
- Run npm run check on its own, unpiped, and report the real exit status before committing.
- Never run git push or wrangler deploy. I do both. A push to main deploys production.
- Never declare UI work done. I run it and judge it.

## Accessibility
- Keyboard first: space reveals, 1 unknown, 2 known, n toggles name, Enter is Next in Drill. In 3D, left and right step, down and up jump to start and end.