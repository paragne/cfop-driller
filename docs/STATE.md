# State

Updated: 2026-10-20 (OLL mapping)

## Current task
None. OLL mapping is done. Next session: OLL batch 1 (Next 1).

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
- Reorder (2026-10-19): UI tweaks moved from first to last in Next.
- OLL mapping (2026-10-20): docs/oll-mapping.md. Source is references/OLL in one month.pdf (the named learn-oll-cubehead.pdf does not exist). 57 PDF cases map one-to-one onto the 57 Full OLL ids, checked by script on cube.ts and by eye on rendered pages. 18 PDF pictures are the app picture after a U turn. City (OLL 34) picture disagrees with its own alg by U. 44 PDF algs are new. Recommendations accepted, recorded in DECISIONS.md. poppler-utils installed on the devbox (apt) to read the PDF.
- Task 2 Case.hint (2026-10-20): optional hint?: string on Case (type only, no case changed). Shown as a .hint line under the name row on flashcards and in Verify, before reveal, hidden by the Notes toggle, hidden on the Verify intro. SPEC.md "Hints" section. Test in algorithms-structure.test.ts (trimmed, non-empty) passes vacuously until the OLL batches add hints. No style.css change. Viewed in browser by user. npm run check: exit 0, 72 files, 7460 tests.

## Next (one task per session)
Follow docs/oll-mapping.md: PDF algs as alternates with the AUF prefix the table gives, no algs[0] changes, names per its table and DECISIONS.md. Check Verify regrip on any alg with a mid-alg rotation in the batch that adds it.
1. OLL batch 1: Oriented Edges (OLL 21-27), T-shapes, Squares, Solved Corners (28, 57). Name, algs, hint. State each changed case in the commit message.
2. OLL batch 2: Lightning Bolts, P-shapes.
3. OLL batch 3: C-shapes, Fishes, L-shapes. Rename section "L Shapes" to "Knight Moves" in batch 4, not here.
4. OLL batch 4: W-shapes, Lines, Knight Moves, Awkward Shapes.
5. OLL batch 5: Dot cases. Reconcile total count against 57.
6. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section; DESIGN.md already exists, decide replace or update).
7. README. I write it. Credit CubeHead.
8. Minor UI tweaks (list to be supplied by me).

## Open decisions
- Split src/style.css (396 lines) or exempt CSS from the 200-line rule.
- PDF alg as algs[0] vs alternate (default: alternate unless it solves the picture exactly).
- CubeHead permission vs paraphrased hints. Blocks hints in every OLL batch; algs and names can land without them. Many PDF notes are jokes or profanity and need rewriting regardless.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is. Change fixture and expected value together if wanted.

## Known issues
- No README.
- docs/DECISIONS.md line 13: two entries share one line (missing newline after the 2026-10-14 references/ entry).
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox too.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials (gh auth login and gh auth setup-git, or switch to SSH).
