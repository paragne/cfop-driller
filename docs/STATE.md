# State

Updated: 2026-10-15

## Current task
None. Task 1 (stale progress tests) done. Next session: Task 2, rename to cfop-driller.

## Done
- Devbox clone, npm ci.
- GitHub repo renamed to cfop-driller.
- Audit (2026-10-15), no code changes:
  - Node v24.21.0, npm 11.19.0. No engines field, no .nvmrc.
  - Parser accepts U2' and round-trips it (notation.ts:15, notation.test.ts:23,97,101, passing).
  - Over 200 lines: src/style.css (396). No .ts file outside src/data/ exceeds 200 (physical-cube.ts is exactly 200, main.ts 199).
  - Boundaries hold: localStorage only in storage.ts (plus test stub storage-stub.ts). DOM only in src/ui/ and main.ts (two body.append calls). cube.ts imports only types from notation.ts.
  - Layout in CLAUDE.md is incomplete. Missing: about 50 pure modules in src/lib/ (session, queue, verify, cross-*, mat4, prefs, progress-*, etc.), and src/ui/three-d/ (WebGL 3D viewer, 37 files, own entry three-d.html via src/ui/three-d/main.ts). Many src/lib/ files import types and CASE_SETS from src/data/.
  - Vite builds three entries: index.html, contact-sheet.html, three-d.html.
  - src/ui/three-d/debug-render-at.ts is a debug module in src/.
  - LICENSE and DESIGN.md already exist. package.json name is still cfop-trainer.
- Task 1 (2026-10-15), commit 882b2cb: commit b96770d added pref crossAllStickers and left 3 tests stale. Added the pref to the expected values in progress.test.ts, progress-v1.test.ts, progress-v2.test.ts. No source changes. npm run check: exit 0, 72 files, 7459 tests.

## Next (one task per session)
1. Rename to cfop-driller (GitHub rename done by hand). In repo: package.json and lockfile, skill folder, visible text, credit link. Do NOT touch localStorage keys or the wrangler name.
2. CI: GitHub Actions running npm ci and npm run check on push to main. Actions pinned by commit SHA, permissions: contents: read.
3. Update CLAUDE.md Layout to match the audit (three-d/, lib modules, lib to data imports).
4. Minor UI tweaks (list to be supplied by me).
5. Add Case.hint: type, SPEC.md section, card display, tests. No data changes yet.
6. OLL mapping. Read references/learn-oll-cubehead.pdf. Produce a table: PDF case, PDF alg, matching existing case id, picture matches (yes, rotated, AUF), proposed change. No data edits. I approve the table.
7. OLL batch 1: Oriented Edges (OLL 21-27), T-shapes, Squares. Name, algs, hint. State each changed case in the commit message.
8. OLL batch 2: Lightning Bolts, P-shapes.
9. OLL batch 3: C-shapes, Fishes, L-shapes.
10. OLL batch 4: W-shapes, Lines, Knight Moves, Awkward Shapes.
11. OLL batch 5: Dot cases. Reconcile total count against 57.
12. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section; DESIGN.md already exists, decide replace or update).
13. README. I write it. Credit CubeHead.

## Open decisions
- Split src/style.css (396 lines) or exempt CSS from the 200-line rule.
- Pin Node version (engines field or .nvmrc) for CI.
- PDF alg as algs[0] vs alternate (default: alternate unless it solves the picture exactly).
- CubeHead permission vs paraphrased hints.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is. Change fixture and expected value together if wanted.

## Known issues
- No README, no CI.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox too.
- Local main is ahead of origin. Nothing pushed this session.
