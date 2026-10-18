# State

Updated: 2026-10-18

## Current task
None. Task 1 (stale progress tests), the rename, CI, and the CLAUDE.md Layout update are done. Next session: minor UI tweaks (list to be supplied).

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
  - LICENSE and DESIGN.md already exist.
- Task 1 (2026-10-15), commit 882b2cb: commit b96770d added pref crossAllStickers and left 3 tests stale. Added the pref to the expected values in progress.test.ts, progress-v1.test.ts, progress-v2.test.ts. No source changes. npm run check: exit 0, 72 files, 7459 tests.

- Rename (2026-10-17): package.json, package-lock.json, REPO_URL in src/ui/home.ts now cfop-driller. Skill folder was already run-cfop-driller. No visible "CFOP Trainer" text existed. Left on purpose: localStorage keys, wrangler.jsonc name (and SPEC.md:377 copy), comment "CFOP trainer" in src/data/algorithms.ts:2 (data file, comment only). npm run check: exit 0, 72 files, 7459 tests.
- CI (2026-10-18): .github/workflows/ci.yml runs npm ci and npm run check on push to main. checkout v7.0.1 and setup-node v7.1.0 pinned by SHA, permissions: contents: read. .nvmrc pins Node 24.21.0 and the workflow reads it. Not yet verified on GitHub (needs a push). npm run check: exit 0, 72 files, 7459 tests.
- CLAUDE.md Layout (2026-10-18): added src/lib/ rule (pure, may import types and CASE_SETS from src/data/), src/ui/three-d/, and the three Vite entries. cube.ts keeps its no-data-import rule. npm run check: exit 0, 72 files, 7459 tests.

## Next (one task per session)
1. Minor UI tweaks (list to be supplied by me).
2. Add Case.hint: type, SPEC.md section, card display, tests. No data changes yet.
3. OLL mapping. Read references/learn-oll-cubehead.pdf. Produce a table: PDF case, PDF alg, matching existing case id, picture matches (yes, rotated, AUF), proposed change. No data edits. I approve the table.
4. OLL batch 1: Oriented Edges (OLL 21-27), T-shapes, Squares. Name, algs, hint. State each changed case in the commit message.
5. OLL batch 2: Lightning Bolts, P-shapes.
6. OLL batch 3: C-shapes, Fishes, L-shapes.
7. OLL batch 4: W-shapes, Lines, Knight Moves, Awkward Shapes.
8. OLL batch 5: Dot cases. Reconcile total count against 57.
9. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section; DESIGN.md already exists, decide replace or update).
10. README. I write it. Credit CubeHead.

## Open decisions
- Split src/style.css (396 lines) or exempt CSS from the 200-line rule.
- PDF alg as algs[0] vs alternate (default: alternate unless it solves the picture exactly).
- CubeHead permission vs paraphrased hints.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is. Change fixture and expected value together if wanted.

## Known issues
- No README.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox too.
- Local main is ahead of origin. Nothing pushed this session.
