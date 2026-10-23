# State

Updated: 2026-10-23 (cleanup, product called done for now)

## Current task
None. Owner is happy with the product. Only owner-side work is left (Next).

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, CI workflow (not yet run on GitHub), CLAUDE.md Layout.
- OLL (2026-10-20 to 10-22): CubeHead names on 57 Full OLL cases, one alg each. Owner hints on Full OLL and PLL (docs/hints.md), loaded into notes via Load My Hints.
- Legend, PRODUCT.md, DESIGN.md, card cleanup, toggles menu (2026-10-22 to 10-23).
- UI fixes (2026-10-23), commits 8ca8c9c..cd092ae. Owner confirmed in browser.
- Cleanup (2026-10-23): dev dependencies pinned to the lockfile, DECISIONS.md line 13 split, CSS exempt from the 200-line rule. Open decisions closed (see DECISIONS.md 2026-10-23). Unchecked browser items accepted as is by the owner. npm run check exit 0, 7580 tests.

## Next (owner)
- README. Owner writes it. Credit CubeHead.
- Push main to origin. Pushing deploys production.

## Candidate tasks (only if the owner asks)
- A bare-page click with the card menu open closes both the menu and the gallery case. Small bug fix, one session.

## Known issues
- main.ts is at 198 lines. render and bindKeys lines are about 150 chars.
- Gallery tooltip does not appear on touch devices by design.
- Save files from before per-mode sets migrate with empty Drill, Verify and Gallery sets.
- Owner's existing notes keep the old hint format until cleared and reloaded.
- Code identifiers still say note/notes. Only UI copy says hint.
- run-cfop-driller driver.mjs fails on this devbox (vite reachability check), so no screenshots.
- impeccable detect: no primary findings, 9 advisory (font sizes off the DESIGN.md ramp).
- Install with npm ci only.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
