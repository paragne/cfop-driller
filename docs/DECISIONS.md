# Decisions

Format: date | decision | reason. Append only.

2026-10-14 (backfill) | Vanilla DOM, no framework | Small UI, zero production dependencies
2026-10-14 (backfill) | Case images computed from solution alg plus mask | Picture cannot disagree with the algorithm; test suite proves every case
2026-10-14 (backfill) | Honor-code recall as the default mode | Main difference from existing trainers
2026-10-14 (backfill) | SM-2 scheduling with an in-session learning step | Failed cases return while the cube is in hand
2026-10-14 (backfill) | Single localStorage key, versioned JSON blob, export/import | No backend, 5MB+ capacity, no cookie overhead
2026-10-14 (backfill) | Case ids frozen, set membership as tags | Ids key stored progress; one SRS record per case
2026-10-14 (backfill) | Cloudflare Workers static assets, git-connected deploy | Static site, no credentials on devbox
2026-10-14 (backfill) | storage.ts is the only module touching localStorage | One place to audit persistence
2026-10-14 | Rename repo and product to CFOP Driller; keep localStorage keys and Worker name | Keys hold users' progress; Worker name is internal
2026-10-14 | Built-in teaching text goes in Case.hint, not user notes | User notes are storage-only and must not be overwritten
2026-10-14 | references/ is gitignored, third-party PDFs never committed | Source is another author's work2026-10-15 | Stale tests were fixed by adding crossAllStickers to the expected prefs, not by changing code | New prefs must appear in the frozen-blob and key-list tests; old blobs read back with the default
2026-10-19 | Hint UI work moved ahead of UI tweaks; UI tweaks go last | Hints unblock the OLL batches
2026-10-20 | Case.hint is optional, shown before reveal, hidden by the Notes toggle, also shown in Verify | Same role as a note as a recall hook; an optional field needs no data edits; a shared toggle avoids a new pref and its test churn
2026-10-20 | OLL source is references/OLL in one month.pdf (CubeHead); all 57 cases map to existing ids, table in docs/oll-mapping.md | The file STATE named does not exist; ids are frozen, so the PDF maps onto them
2026-10-20 | PDF algs go in as alternates with any needed AUF prefix; no algs[0] changes | Keeps every picture and 3D start state users already know
2026-10-20 | oll-21 stays "H" (alias "Cross"); oll-57 stays "OLL 57" (alias "H") | Two cards must not share a name; 2-Look users know 21 as H
2026-10-20 | PDF names for OLL 3, 4, 29, 30 not used; those keep their numbers | Public UI copy; OLL 3 and 4 names reference a hate group
2026-10-20 | Case sections unchanged except "L Shapes" becomes "Knight Moves" | Sections are display only; current "L Shapes" clashes with the PDF's L-shapes
2026-10-21 | OLL hints are CubeHead's PDF notes verbatim, typos included | User's call; README credits CubeHead
2026-10-22 | Full OLL has one alg per case: the PDF top alg as algs[0], picture turned to match; all alternates removed. WTF uses the PDF y alg | Alternates were noise; the alg the user knows must work on the picture. Supersedes 2026-10-20 alternates entry
2026-10-22 | OLL takes PDF names: oll-21 Cross, oll-57 H, oll-29 WTF, oll-30 Anti-WTF; OLL 3 and 4 stay numbered | User uses these names. Supersedes the 2026-10-20 H and OLL 29/30 entries
2026-10-22 | Hints are owner-written (docs/oll-hints.md), replacing the verbatim CubeHead notes | Supersedes 2026-10-21
2026-10-22 | Hints merge into notes: owner hints ship as data, off by default, "Load My Hints" fills empty notes after confirmation | One feature instead of two; never overwrites what the user wrote. Supersedes 2026-10-14 hint/notes split and 2026-10-20 hint display
2026-10-22 | Pref toggles move to a hamburger menu with Blind and Guided presets | Fewer controls on the card
2026-10-22 | PLL gets owner hints too; all hints live in docs/hints.md | Same legend covers both sets
