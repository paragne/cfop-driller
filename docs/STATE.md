# State

Updated: 2026-10-22 (toggles menu)

## Current task
Next 3 (toggles menu) is built, awaiting the user's browser check. Next session: fix whatever that check finds, then Next 5.

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, repo renamed cfop-driller, CI workflow (.github/workflows/ci.yml, actions pinned by SHA, Node from .nvmrc 24.21.0, not yet run on GitHub), CLAUDE.md Layout covers src/lib/, src/ui/three-d/ and the three Vite entries.
- OLL (2026-10-20 to 10-22): docs/oll-mapping.md maps the CubeHead PDF onto the 57 Full OLL ids. One alg per Full OLL case. oll-29 and oll-52 leave the cube rotated. Ua: owner's alg is algs[0].
- Case.hint: owner hints on every Full OLL and Full PLL case except Sune, Anti-Sune, Pi. Source: docs/hints.md. Shown only as notes via Load My Hints.
- Legend drawer, PRODUCT.md, DESIGN.md, hints into notes, card cleanup (2026-10-22). a78fa32 and c6dbafb still not confirmed in browser.
- Toggles menu (2026-10-22), npm run check exit 0, 7457 tests. Not confirmed in browser:
  - dcc1745 Pref toggles go through one keyed handler (made room in main.ts, now 198 lines).
  - f8f4624 setGuided in src/lib/progress-edit.ts: Blind/Guided set Names, Hints, Auto-reveal, Hotkeys. 4 tests.
  - 2932378 src/ui/pref-bar.ts became src/ui/card-menu.ts, a dropdown panel. Top-left menu button opens the data menu on home and the card menu elsewhere. 3D left the top right for the menu. panel.ts close() is a no-op when already closed, so two panels can share the button's aria-expanded. THREE_D_ICON removed. Phone two-row top bar CSS removed. Intro copy points to the menu.

## Next (one task per session)
Decisions: DECISIONS.md. Hint text and legend: docs/hints.md.
4. README. User writes it. Credit CubeHead.
5. Minor UI tweaks (list to be supplied by user).

## Open decisions
- Split src/style.css (about 416 lines) or exempt CSS from the 200-line rule.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is.
- Legend chip placement after the toggle bar's removal.

## Known issues
- main.ts is at 198 lines. render and bindKeys lines are about 150 chars.
- Menu button plus Back on a gallery case at about 360px may be tight beside the logo. Not checked.
- Card menu: Names kbd "n" shows only with Hotkeys on. Not checked in browser.
- Gallery meta line may end in a trailing " · " since its count is empty. Not checked.
- Code identifiers still say note/notes (notes.ts, onNote, showNotes pref). Only UI copy says hint.
- run-cfop-driller driver.mjs fails on this Linux devbox (vite reachability check), so no screenshots.
- impeccable detect: no primary findings, 9 advisory (font sizes off the DESIGN.md ramp).
- Still unchecked in browser from earlier: legend chip at phone width, legend stays open on Next, Verify num. Check, 3D face names top left, Load My Hints flows, data menu at about 360px.
- No README.
- docs/DECISIONS.md line 13: two entries share one line.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
