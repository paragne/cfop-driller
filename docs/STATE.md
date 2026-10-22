# State

Updated: 2026-10-22 (hints merged into notes)

## Current task
None. Next session: Next 2 (card cleanup). User still to check this session's UI in the browser (see last Done entry).

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, repo renamed cfop-driller, CI workflow (.github/workflows/ci.yml, actions pinned by SHA, Node from .nvmrc 24.21.0, not yet run on GitHub), CLAUDE.md Layout covers src/lib/, src/ui/three-d/ and the three Vite entries.
- OLL (2026-10-20 to 10-22): docs/oll-mapping.md maps the CubeHead PDF onto the 57 Full OLL ids. One alg per Full OLL case. oll-29 and oll-52 leave the cube rotated. Ua: owner's alg is algs[0].
- Case.hint (2026-10-20, revised 10-22): owner hints on every Full OLL and Full PLL case except Sune, Anti-Sune, Pi. Source text: docs/hints.md.
- Legend drawer (2026-10-22): src/ui/legend.ts, a chip in the top bar tools, stays open across cards.
- PRODUCT.md and DESIGN.md (2026-10-22), sidecar .impeccable/design.json.
- Hints into notes (2026-10-22), npm run check exit 0, 7452 tests:
  - ca8ac5d one note handler for Drill and Verify (via caseView), frees main.ts lines.
  - 34aa94f loadHints in src/lib/progress-edit.ts: fills only cases with no note, returns the count. 4 tests.
  - 2a3e4e4 Case.hint no longer displayed. Toggle "Hints", top bar "Edit hint". Menu row "Load My Hints" between Load Data and Wipe Data; in-place strip "Load the app owner's hints?" Load/Cancel; status "Loaded N hints. Hints you wrote are kept." Menu copy says hints.
  - 588209c SPEC.md "Notes" and "Hints" merged into one "Hints" section; CLAUDE.md hint rule replaced. SPEC said Verify had no Notes toggle; code shows it, SPEC corrected.
  - User to check in browser: wiped data shows no hints; Load My Hints fills OLL/PLL; own hint survives a second load; Hints toggle and Edit hint; Cancel; picking a file while the strip is open; menu at about 360px; hint text now uses the note style (smaller than the old 1rem hint). Also still unchecked from earlier this day: legend chip at phone width, legend stays open on Next, Verify num. Check, 3D face names top left.

## Next (one task per session)
Decisions: DECISIONS.md 2026-10-22. Hint text and legend: docs/hints.md.
2. Card cleanup. Hide the star when a case has one alg. Meta line: "OLL · Finish OLL · 1" becomes "Finish OLL · Card 1" (session position, flashcard.ts:95).
3. Toggles into a top-left hamburger menu: Names, Hints, Auto-reveal, Hotkeys, 3D. Presets "Blind" (all off) and "Guided" (all on), both leave 3D alone. Only "Edit hint" stays top right. Legend chip placement may need revisiting here.
4. README. User writes it. Credit CubeHead.
5. Minor UI tweaks (list to be supplied by user).

## Open decisions
- Split src/style.css (about 425 lines) or exempt CSS from the 200-line rule.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is.

## Known issues
- main.ts is at exactly 200 lines again; the next wiring change needs room made first. render and bindKeys lines are already about 150 chars.
- Code identifiers still say note/notes (notes.ts, onNote, showNotes pref). Only UI copy says hint.
- run-cfop-driller driver.mjs fails on this Linux devbox (vite reachability check), so no screenshots.
- impeccable detect: advisory only, font sizes off the DESIGN.md ramp. No primary findings. Not rerun this session.
- No README.
- docs/DECISIONS.md line 13: two entries share one line.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
