# State

Updated: 2026-10-15

## Current task
None. Task 1 done. Next session: decide on the failing progress tests, then Task 2.

## Done
- Devbox clone, npm ci.
- GitHub repo renamed to cfop-driller.
- Task 1 audit (2026-10-15), no code changes:
  - Node v24.21.0, npm 11.19.0. No engines field, no .nvmrc.
  - npm run check: exit 1. tsc and eslint pass. Vitest: 72 files, 7459 tests, 3 fail.
  - The 3 failures: progress-v1.test.ts:44, progress-v2.test.ts:24, progress.test.ts:77. Commit b96770d added pref crossAllStickers and did not update the expected pref lists. Diagnosis: tests are stale, code is right.
  - Parser accepts U2' and round-trips it (notation.ts:15, notation.test.ts:23,97,101, passing).
  - Over 200 lines: src/style.css (396). No .ts file outside src/data/ exceeds 200 (physical-cube.ts is exactly 200, main.ts 199).
  - Boundaries hold: localStorage only in storage.ts (plus test stub storage-stub.ts). DOM only in src/ui/ and main.ts (two body.append calls). cube.ts imports only types from notation.ts.
  - Layout in CLAUDE.md is incomplete. Missing: about 50 pure modules in src/lib/ (session, queue, verify, cross-*, mat4, prefs, progress-*, etc.), and src/ui/three-d/ (WebGL 3D viewer, 37 files, own entry three-d.html via src/ui/three-d/main.ts). Many src/lib/ files import types and CASE_SETS from src/data/.
  - Vite builds three entries: index.html, contact-sheet.html, three-d.html.
  - src/ui/three-d/debug-render-at.ts is a debug module in src/.
  - LICENSE and DESIGN.md already exist. package.json name is still cfop-trainer.

## Next (one task per session)
1. Fix the 3 stale progress tests (needs my OK, see Open decisions).
2. Rename to cfop-driller (GitHub rename done by hand). In repo: package.json and lockfile, skill folder, visible text, credit link. Do NOT touch localStorage keys or the wrangler name.
3. CI: GitHub Actions running npm ci and npm run check on push to main. Actions pinned by commit SHA, permissions: contents: read.
4. Update CLAUDE.md Layout to match the audit (three-d/, lib modules, lib to data imports).
5. Minor UI tweaks (list to be supplied by me).
6. Add Case.hint: type, SPEC.md section, card display, tests. No data changes yet.
7. OLL mapping. Read references/learn-oll-cubehead.pdf. Produce a table: PDF case, PDF alg, matching existing case id, picture matches (yes, rotated, AUF), proposed change. No data edits. I approve the table.
8. OLL batch 1: Oriented Edges (OLL 21-27), T-shapes, Squares. Name, algs, hint. State each changed case in the commit message.
9. OLL batch 2: Lightning Bolts, P-shapes.
10. OLL batch 3: C-shapes, Fishes, L-shapes.
11. OLL batch 4: W-shapes, Lines, Knight Moves, Awkward Shapes.
12. OLL batch 5: Dot cases. Reconcile total count against 57.
13. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section; DESIGN.md already exists, decide replace or update).
14. README. I write it. Credit CubeHead.

## Open decisions
- Stale tests: add crossAllStickers to the expected prefs in the 3 progress tests (proposed), or treat the new pref as a bug.
- Split src/style.css (396 lines) or exempt CSS from the 200-line rule.
- Pin Node version (engines field or .nvmrc) for CI.
- PDF alg as algs[0] vs alternate (default: alternate unless it solves the picture exactly).
- CubeHead permission vs paraphrased hints.
- Whether CI gates production deploys.

## Known issues
- npm run check fails (3 stale progress tests).
- No README, no CI.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox too.
