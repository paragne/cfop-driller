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
