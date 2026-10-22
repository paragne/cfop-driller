# State

Updated: 2026-10-22 (card cleanup)

## Current task
None. Next session: Next 3 (toggles menu).

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, repo renamed cfop-driller, CI workflow (.github/workflows/ci.yml, actions pinned by SHA, Node from .nvmrc 24.21.0, not yet run on GitHub), CLAUDE.md Layout covers src/lib/, src/ui/three-d/ and the three Vite entries.
- OLL (2026-10-20 to 10-22): docs/oll-mapping.md maps the CubeHead PDF onto the 57 Full OLL ids. One alg per Full OLL case. oll-29 and oll-52 leave the cube rotated. Ua: owner's alg is algs[0].
- Case.hint (2026-10-20, revised 10-22): owner hints on every Full OLL and Full PLL case except Sune, Anti-Sune, Pi. Source text: docs/hints.md. Shown only as notes via Load My Hints.
- Legend drawer, PRODUCT.md, DESIGN.md, hints into notes (2026-10-22).
- Card cleanup (2026-10-22), npm run check exit 0, 7453 tests. User confirmed f98c08b, 9a79296, 7620244 in the browser; a78fa32 and c6dbafb not confirmed:
  - a78fa32 Reveal shows name and meta line in Learn and Drill even with Names off; Next hides them again. Gallery counts as revealed, so it always shows names.
  - c6dbafb No star on a one-alg case (src/lib/solution.ts). 1 test.
  - f98c08b Flashcard header: name and meta line in a left box (.lead), hint on the right, so a long hint no longer pushes the meta line down.
  - 9a79296 Same layout in Verify for the count line.
  - 7620244 Meta line: "Finish OLL · Card 1" (Drill), "Finish OLL · Card 3 / 20" (Learn). Learn number is done + 1, the card being worked on. Two test strings updated.

## Next (one task per session)
Decisions: DECISIONS.md. Hint text and legend: docs/hints.md.
3. Toggles into a top-left hamburger menu: Names, Hints, Auto-reveal, Hotkeys, 3D. Presets "Blind" (all off) and "Guided" (all on), both leave 3D alone. Only "Edit hint" stays top right. Legend chip placement may need revisiting here.
4. README. User writes it. Credit CubeHead.
5. Minor UI tweaks (list to be supplied by user).

## Open decisions
- Split src/style.css (about 425 lines) or exempt CSS from the 200-line rule.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is.

## Known issues
- main.ts is at exactly 200 lines; the next wiring change (likely Next 3) needs room made first. render and bindKeys lines are already about 150 chars.
- Gallery meta line may end in a trailing " · " since its count is empty. Not checked.
- Code identifiers still say note/notes (notes.ts, onNote, showNotes pref). Only UI copy says hint.
- run-cfop-driller driver.mjs fails on this Linux devbox (vite reachability check), so no screenshots.
- impeccable detect: advisory only, font sizes off the DESIGN.md ramp. No primary findings. Not rerun this session.
- Still unchecked in browser from earlier: legend chip at phone width, legend stays open on Next, Verify num. Check, 3D face names top left, Load My Hints flows, menu at about 360px.
- No README.
- docs/DECISIONS.md line 13: two entries share one line.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
