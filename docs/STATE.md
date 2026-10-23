# State

Updated: 2026-10-23 (toggles menu check, UI fixes)

## Current task
Toggles menu and its fixes are done and confirmed in browser. Next session: Next 5 (owner supplies the list), or Next 4 when the owner has written the README.

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, CI workflow (not yet run on GitHub), CLAUDE.md Layout.
- OLL (2026-10-20 to 10-22): CubeHead names on 57 Full OLL cases, one alg each. Owner hints on Full OLL and PLL (docs/hints.md), loaded into notes via Load My Hints.
- Legend, PRODUCT.md, DESIGN.md, card cleanup, toggles menu (2026-10-22). Owner confirmed the hamburger menu in browser 2026-10-23.
- UI fixes (2026-10-23), npm run check exit 0, 7580 tests. Commits 8ca8c9c..cd092ae:
  - Meta line "Section · n/total", "Group · " prefix only when chosen sets mix groups (src/lib/card-meta.ts). Learn, Drill, Gallery, Verify. Card counters gone.
  - No "OLL n" anywhere. oll-3 "Dot P-T'", oll-4 "Dot P-T". Gallery headings show section only.
  - Blind/Guided leave Hotkeys alone. Hotkeys default off.
  - First visit: Drill, no sets in any mode. Tests use picked() in session.fixture.ts.
  - Intro and Verify ready: hollow grey "Don't show this again" button under Begin.
  - Gallery: 500ms hover/focus tooltip (starred alg, user hint), arrow Back left of menu, bare-page click closes a case.
  - Verify: shared meta line, "x matched" only after Mismatch, Verify.step removed. Ready copy updated.
  - Hint footnotes [*...] on their own line. New help icon.
- Owner confirmed all of the above in browser 2026-10-23.

## Next (one task per session)
4. README. User writes it. Credit CubeHead.
5. Minor UI tweaks (list to be supplied by user).

## Open decisions
- Split src/style.css (about 430 lines) or exempt CSS from the 200-line rule.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is.
- Legend chip placement after the toggle bar's removal.

## Known issues
- main.ts is at 198 lines. render and bindKeys lines are about 150 chars.
- A bare-page click with the card menu open closes both the menu and the gallery case.
- Gallery tooltip does not appear on touch devices by design.
- Save files from before per-mode sets migrate with empty Drill, Verify and Gallery sets.
- Owner's existing notes keep the old hint format until cleared and reloaded.
- Code identifiers still say note/notes. Only UI copy says hint.
- run-cfop-driller driver.mjs fails on this devbox (vite reachability check), so no screenshots.
- impeccable detect: no primary findings, 9 advisory (font sizes off the DESIGN.md ramp).
- Still unchecked from earlier: legend chip at phone width, legend stays open on Next, Verify num. Check, 3D face names top left.
- docs/DECISIONS.md line 13: two entries share one line.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
