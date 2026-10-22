# State

Updated: 2026-10-22 (legend move, hint position, Verify num. Check, hint list v2)

## Current task
None. Next session: Next 1 (merge hints into notes). User still to check this session's UI in the browser (see last Done entry).

## Done
- Setup and audit (2026-10-15 to 10-18): devbox, repo renamed cfop-driller, CI workflow (.github/workflows/ci.yml, actions pinned by SHA, Node from .nvmrc 24.21.0, not yet run on GitHub), CLAUDE.md Layout covers src/lib/, src/ui/three-d/ and the three Vite entries. Stale pref tests fixed (882b2cb).
- OLL (2026-10-20 to 10-22): docs/oll-mapping.md maps the CubeHead PDF onto the 57 Full OLL ids. Full OLL has one alg per case (PDF top alg), PDF names, OLL 3 and 4 stay numbered. oll-29 and oll-52 leave the cube rotated. Ua: owner's alg is algs[0].
- Case.hint (2026-10-20): optional field, owner hints on every Full OLL and Full PLL case except Sune, Anti-Sune, Pi. Source text: docs/hints.md.
- Legend drawer (2026-10-22): src/ui/legend.ts, notation from docs/hints.md. Non-modal drawer, 22rem, full screen under 36rem.
- PRODUCT.md and DESIGN.md (2026-10-22), sidecar .impeccable/design.json.
- This session (2026-10-22), all npm run check exit 0, 7448 tests:
  - 675e142 drawer class legend renamed legend-drawer; the 3D face-name .legend no longer overridden.
  - 5bfff8e Legend is a text chip in the top bar tools, right of 3D (left of help on home). Closes only on its chip, Close, or Escape, so it stays open across cards. main.ts still 200 lines (createLegend(topbar.helpButton) inserts the chip).
  - 9cd9769 hint moved into the name row, right side, before the note; 1rem. SPEC.md "Hints" updated.
  - c4d1e27 merge rule removed from the legend and docs/hints.md.
  - a704995 Verify: know (numpad . and key 2) also triggers Check during an attempt; num0 still works. Key hint reads "space / num." during an attempt. Test in screen-verify.test.ts.
  - 5bd87f0 owner's second hint list: 34 cases changed (oll-23, 25, 6, 12, 39, 43, 31, 32, 9, 53, 50, 49, 55, 13, 41, 42, 29, 2, 18, 3, 4; pll-ua, h, aa, ab, e, t, f, jb, y, na, gb, gc, gd). Hint text only. docs/hints.md table and PLL block replaced.
  - User to check in browser: legend chip placement and phone width (about 360px, the right tools group may overflow; fallback is an icon), legend stays open on Next, hint at top right (long ones: F Perm, Zamboni, Gc; a case with a note too), Verify num. Check, 3D face names top left.

## Next (one task per session)
Decisions for all of these: DECISIONS.md 2026-10-22. Hint text and legend: docs/hints.md.
1. Merge hints into notes. Case.hint becomes owner hint data, not displayed. Notes are the only hint shown, top right on the name row (the hint already sits there; until this lands a hint and a note can both show on the right). Menu item "Load My Hints" with a confirmation ("Load the app owner's hints?"), fills only cases with no note, says how many. "Take notes" button becomes "Edit hint", "Notes" toggle becomes "Hints". Default: no notes. Update the CLAUDE.md rule "Never write hints into user notes" and SPEC.md "Hints" in the same task. "Edit hint" opens the existing note editor unchanged. Menu item goes in the home menu (SPEC.md Layout: Save, Load, Wipe, Share). main.ts is at 200 lines: make room first if wiring is needed.
2. Card cleanup. Hide the star when a case has one alg. Meta line: "OLL · Finish OLL · 1" becomes "Finish OLL · Card 1" (session position, flashcard.ts:98).
3. Toggles into a top-left hamburger menu: Names, Hints, Auto-reveal, Hotkeys, 3D. Presets "Blind" (all off) and "Guided" (all on), both leave 3D alone. Only "Edit hint" stays top right. Legend chip placement may need revisiting here.
4. README. User writes it. Credit CubeHead.
5. Minor UI tweaks (list to be supplied by user).

## Open decisions
- Split src/style.css (425 lines) or exempt CSS from the 200-line rule.
- Whether CI gates production deploys.
- slop-check hook flags the em dash in the frozen fixture progress-v2.test.ts:19. Left as is.

## Known issues
- main.ts is at the 200-line limit; the next wiring change needs room made first.
- run-cfop-driller driver.mjs fails on this Linux devbox (vite reachability check), so no screenshots.
- impeccable detect: advisory only, font sizes off the DESIGN.md ramp (incl. 0.75rem chips). No primary findings.
- No README.
- docs/DECISIONS.md line 13: two entries share one line.
- Caret ranges in package.json. Install with npm ci only.
- contact-sheet.html and three-d.html ship in production builds. debug-render-at.ts may ship with three-d.
- references/ is gitignored. It exists on this devbox.
- Local main is ahead of origin. git push fails on the devbox: no GitHub credentials.
