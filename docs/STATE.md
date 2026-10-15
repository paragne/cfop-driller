# State

Updated: 2026-10-14

## Current task
Task 1: audit and baseline. Adopted an existing repo (v3.0.0, 141 commits).

## Done
- Devbox clone, npm ci, npm run check (record result in Task 1).
- GitHub repo renamed to cfop-driller

## Next (one task per session)
1. Audit. List src/, reconcile CLAUDE.md Layout with reality (3D view, UI files). Record Node version, check result, test count, files over 200 lines. Check the parser accepts U2'. No code changes.
2. Rename to cfop-driller (GitHub rename done by hand). In repo: package.json and lockfile, skill folder, visible text, credit link. Do NOT touch localStorage keys or the wrangler name.
3. CI: GitHub Actions running npm ci and npm run check on push to main. Actions pinned by commit SHA, permissions: contents: read.
4. Minor UI tweaks (list to be supplied by me).
5. Add Case.hint: type, SPEC.md section, card display, tests. No data changes yet.
6. OLL mapping. Read references/learn-oll-cubehead.pdf. Produce a table: PDF case, PDF alg, matching existing case id, picture matches (yes, rotated, AUF), proposed change. No data edits. I approve the table.
7. OLL batch 1: Oriented Edges (OLL 21-27), T-shapes, Squares. Name, algs, hint. State each changed case in the commit message.
8. OLL batch 2: Lightning Bolts, P-shapes.
9. OLL batch 3: C-shapes, Fishes, L-shapes.
10. OLL batch 4: W-shapes, Lines, Knight Moves, Awkward Shapes.
11. OLL batch 5: Dot cases. Reconcile total count against 57.
12. PRODUCT.md (/impeccable init), DESIGN.md (/impeccable document, seeded from the old Visual design section).
13. README. I write it. Credit CubeHead.

## Open decisions
- PDF alg as algs[0] vs alternate (default: alternate unless it solves the picture exactly).
- CubeHead permission vs paraphrased hints.
- Whether CI gates production deploys.

## Known issues
- No README, no LICENSE, no CI.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds.
- references/ exists only on my PC and is gitignored.