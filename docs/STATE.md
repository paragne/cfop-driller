# State

Updated: 2026-10-22 (plan split)

## Current task
None. Old OLL batches 2-5 replaced by the plan below (decided 2026-10-22). Next session: Next 1.

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
- OLL batch 1 (2026-10-21), commit 8ffe2e2: oll-21 to 27, 45, 33, 5, 6, 28, 57. Names T, Key, Righty Square, Lefty Square, Arrow (old "OLL n" moved to aliases). Alias Cross on 21, H on 57. Alternates on 27, 26, 23, and two on 21 with U prefix. Hints verbatim from the PDF on all 13, typos kept ("instad", "Righty-Square", "F' , easy"). verify-choices.test.ts one-alg fixture moved from oll-27 to oll-22. Leading-y alternates show as Verify choices; the independent choices test passes. npm run check: exit 0, 72 files, 7489 tests.

## Next (one task per session)
Decisions for all of these: DECISIONS.md 2026-10-22. Hint text and legend: docs/oll-hints.md.
1. OLL one alg per case. For all 57 Full OLL cases: algs[0] is the PDF top alg (docs/oll-mapping.md), exactly as printed, so the picture turns where the table says "rotated". Exception: WTF (oll-29) uses the PDF y alg. Cases whose algs[0] already is the top alg (Sune, Anti-Sune, Headlights, oll-21, and more) keep it; oll-21 keeps `R U R' U (R U' R' U) R U2 R'`. Drop every OLL alternate (including batch 1's). 2-Look OLL shares oll-21 to 27: check it still makes sense. Names: PDF names, oll-21 "Cross" (alias H), oll-57 "H", oll-29 "WTF", oll-30 "Anti-WTF", oll-22 stays Pi (alias Bruno), oll-3 and oll-4 stay numbered. Old "OLL n" stays an alias. Hints: replace all with docs/oll-hints.md; Sune, Anti-Sune, Pi get none. Check every hint against its alg by hand and list mismatches to the user, do not fix them. State each changed case in the commit. Over 50 lines: plan first.
2. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section; DESIGN.md already exists, decide replace or update). Required before tasks 3 to 6 (global UI rule).
3. Merge hints into notes. Case.hint becomes owner hint data, not displayed. Notes are the only hint shown. Menu item "Load My Hints" with a confirmation ("Load the app owner's hints?"), fills only cases with no note, says how many. "Take notes" button becomes "Edit hint", "Notes" toggle becomes "Hints". Default: no notes. Update the CLAUDE.md rule "Never write hints into user notes" and SPEC.md "Hints" in the same task.
4. Card cleanup. Hide the star when a case has one alg. Meta line: "OLL · Finish OLL · 1" becomes "Finish OLL · Card 1" (the number is the session position, flashcard.ts:98, users read it as an OLL number).
5. Toggles into a top-left hamburger menu: Names, Hints, Auto-reveal, Hotkeys, 3D. Presets "Blind" (all off) and "Guided" (all on), both leave 3D alone. Only "Edit hint" stays top right.
6. Legend drawer: a button on the right edge opens the legend from docs/oll-hints.md. Full screen on mobile.
7. README. I write it. Credit CubeHead.
8. Minor UI tweaks (list to be supplied by me).

## Open decisions
- Split src/style.css (396 lines) or exempt CSS from the 200-line rule.
- Crown hint `(Wide Anti-Sune) ||Wide Anti-Sune||` does not match its top alg `(r U R' U R U2 r') (r' U' R U' R' U2 r)`, which reads as (Wide Sune) ~Wide Sune~. User to confirm.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is. Change fixture and expected value together if wanted.

## Known issues
- No README.
- docs/DECISIONS.md line 13: two entries share one line (missing newline after the 2026-10-14 references/ entry).
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox too.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials (gh auth login and gh auth setup-git, or switch to SSH).
