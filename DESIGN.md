---
name: CFOP Driller
description: Dense, fast, high-contrast flashcards for drilling CFOP with a cube in one hand.
colors:
  ink-black: "#0b0b0c"
  panel-graphite: "#151517"
  hairline: "#2a2a2e"
  bone-white: "#ececee"
  ash-gray: "#8d8d96"
  lavender-signal: "#a78bfa"
  tick-empty: "#34343a"
  set-basic-f2l: "#f87171"
  set-advanced-f2l: "#fb923c"
  set-expert-f2l: "#facc15"
  set-2look-oll: "#4ade80"
  set-full-oll: "#60a5fa"
  set-2look-pll: "#818cf8"
  set-full-pll: "#c084fc"
typography:
  headline:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
  title:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  body-small:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.04em"
  alg:
    fontFamily: "ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  tick: "1px"
  sm: "2px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
components:
  button:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
    height: "3.25rem"
  button-primary:
    backgroundColor: "{colors.lavender-signal}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
    height: "3.25rem"
  toggle:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.75rem"
    height: "2.25rem"
  toggle-pressed:
    backgroundColor: "{colors.bone-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sm}"
  chip-topbar:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "0.125rem 0.5rem"
    height: "2rem"
  solution-panel:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.75rem"
  note-field:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "0.5rem"
  popover:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.ash-gray}"
    rounded: "{rounded.sm}"
    padding: "0.75rem"
    width: "24rem"
---

# Design System: CFOP Driller

## Overview

**Creative North Star: "The Flash Card"**

One card, one answer, next. The screen is a flash card held up in a dark room: the case picture is the card face, and everything else is the hand holding it. The tool is used with a cube in one hand and a thumb or a keyboard in the other, in short daily sessions, so every element earns its place by speeding up the next card.

Dense, fast, high-contrast. A drilling tool, not a marketing page. Near-black ground, bright cube, grayscale chrome, and one violet that means "do this". Flat surfaces separated by 1px hairlines. No ornament.

Mobile first, single column. Desktop gets more padding and a three-button action row, not a different layout.

**Key Characteristics:**
- The case picture is the largest element on screen by a wide margin.
- Grayscale chrome, one accent for the primary action.
- System fonts only, monospace for algs.
- Flat, hairline borders, 2px corners.
- Primary actions in the thumb zone at the bottom.

## Colors

A near-black grayscale with one light violet and a seven-step rainbow reserved for set identity.

### Primary
- **Lavender Signal** (lavender-signal): the primary action only: Start, Reveal, Begin, Start another session, and Verify's main step button. Also the checkbox accent. It matches the logo mark's violet.

### Neutral
- **Ink Black** (ink-black): page background and the text color on inverted (pressed) controls and on the primary button.
- **Panel Graphite** (panel-graphite): raised surfaces: buttons, toggles, solution box, note field, popovers, the legend drawer.
- **Hairline** (hairline): every border and divider at rest.
- **Bone White** (bone-white): body text, pressed toggle fill, focus ring, hover emphasis.
- **Ash Gray** (ash-gray): secondary text: meta line, notes, hints, stat numbers, alternate algs. Also the hover border on buttons.
- **Tick Empty** (tick-empty): unseen-case ticks in the home stats.

### Set colors
Seven set colors (set-basic-f2l through set-full-pll), red to violet in the order the home screen lists the sets. Used only for the stat row name and its ticks, passed as the `--set` property per row. Missed ticks use the set color at 35% opacity.

### Named Rules
**The One Signal Rule.** Lavender Signal appears on the primary action and nowhere else. A pressed toggle inverts to Bone White on Ink Black, never violet, so the accent always means "the next step".

**The Rainbow Stays Home Rule.** Set colors live in the home stats only. They never tint cards, buttons or the cube.

**The Label Beside Hue Rule.** Hue is never the only carrier of meaning. Every set color sits next to its set name, and learned versus missed ticks differ in opacity as well as presence.

## Typography

**Body Font:** system-ui (with -apple-system, Segoe UI, Roboto, sans-serif)
**Label/Mono Font:** ui-monospace (with Cascadia Mono, Consolas, monospace)

**Character:** The system stack loads nothing and reads as the device's own UI. Monospace marks anything the user executes: algs, scrambles, notation, key hints.

### Hierarchy
- **Headline** (600, 1.5rem): summary and intro screen titles only.
- **Title** (600, 1.15rem): the case name on the card.
- **Body** (400, 16px, 1.4): default text and buttons.
- **Body small** (400, 0.875rem): toggles, meta line, hints, popover text. Top bar chips drop to 0.75rem.
- **Label** (600, 0.8125rem, 0.04em, uppercase): section titles in the gallery and the stats table.
- **Alg** (mono 400, 1.15rem, 1.4): the solution. Alternates drop to 0.95rem in Ash Gray.

### Named Rules
**The Executable Is Mono Rule.** If the user can turn it on a cube or press it on a keyboard, it is set in monospace. Nothing else is.

**The No Font Loading Rule.** No web fonts. The app must render its first card offline with nothing to fetch.

## Layout

A single 40rem column, centered, with 0.75rem padding (1.5rem from 48rem up). The gallery widens to 64rem. Spacing steps are 0.25, 0.5, 0.75, 1 and 1.5rem; gaps between card sections are 0.75rem (1rem on desktop).

The card screen is a vertical flex column: top bar, meta line, name row, picture, solution, actions. The picture takes all remaining height (max 52vh, 60vh on desktop). The 3D view takes the same slot.

The name row splits 60/40: the name on the left, the note on the right, never past 40% of the width, clamped to four lines.

The action row is sticky at the bottom with safe-area padding: two columns, primary spanning both on a phone, three equal columns from 48rem. The home credit bar is sticky at the bottom too.

Below 36rem the top bar's preference chips drop to their own row under the logo so the logo stays centered, and the legend drawer goes full screen.

### Named Rules
**The Picture Wins Rule.** The case picture is the largest element on screen by a wide margin. If a new element shrinks it noticeably on a phone, the element moves or goes.

**The Thumb Zone Rule.** Primary actions sit in the lower third, reachable by thumb on a phone.

## Elevation & Depth

Flat. No shadows, no gradients, no glass. Depth is tonal: Panel Graphite surfaces on Ink Black, edged with a 1px Hairline. Popovers and drawers float with position fixed or absolute so opening them moves nothing, but they are not lifted visually; they read as a panel with a hairline edge.

### Named Rules
**The Hairline Not Shadow Rule.** Separation is a 1px Hairline border or a background step, never a shadow.

**The Nothing Moves Rule.** Opening a popover, menu or drawer never reflows the page. It overlays.

## Shapes

Sharp. Every control, panel and field has 2px corners. Stat ticks use 1px. The only round shape is the 3D alg marker's 8px dot. The legend tab is a vertical strip on the right edge, rounded only on its two exposed corners.

## Components

### Buttons
- **Shape:** sharp (2px).
- **Default:** Panel Graphite fill, Hairline border, Bone White text, 3.25rem tall. Hover shifts the border to Ash Gray. Disabled is 40% opacity.
- **Primary:** Lavender Signal fill and border, Ink Black text, weight 600.
- **Quiet:** transparent border and fill, Ash Gray text. For secondary exits on summary and Verify screens.
- **Top bar:** chrome, not actions. Transparent at rest, 2.75rem tall, border appears on hover. Back is outlined in Bone White at 1.125rem/600 so it cannot be missed.
- **Focus:** 2px Bone White outline, 2px offset, on every focusable element.

### Toggles
- **Style:** a button at 2.25rem tall, 0.875rem text.
- **Pressed:** inverted. Bone White fill and border, Ink Black text. Signalled by `aria-pressed`.
- **Top bar chips:** 2rem tall, 0.75rem text, Panel Graphite with Hairline border. Same inverted pressed state. Key hints hidden.

### Solution panel
- Panel Graphite, Hairline border, 2px corners, 0.5rem 0.75rem padding. The primary alg in Alg type, alternates smaller in Ash Gray. Star toggles sit in a 2.75rem hit area, Ash Gray at rest, Bone White when pressed.

### Note field
- Full-width textarea, Panel Graphite, Hairline border, 2px corners, no resize handle. Edits in place on the card, never in a dialog.

### Popovers and drawers
- Menu and help: fixed under the top bar, 24rem wide, aligned to the content column's left or right edge. Panel Graphite, Hairline border, Ash Gray text with Bone White headings.
- Legend drawer: 22rem, full height on the right edge, opened by a vertical "Legend" tab at mid height. Full screen below 36rem. Non-modal: Escape, outside click or Close dismisses it.

### Key hints
- `kbd` in 0.75rem mono, outlined in currentColor at 60% opacity. Hidden on devices without hover.

### Case picture (signature)
- A computed SVG of the case: masked stickers bright on Ink Black, gray where the mask hides them. Centered, full column width, capped by viewport height. It is never stored, always rendered from the alg.

## Do's and Don'ts

### Do:
- **Do** keep Lavender Signal on the one primary action per screen.
- **Do** invert to Bone White on Ink Black for any pressed or selected state.
- **Do** use a 1px Hairline and Panel Graphite for every new surface.
- **Do** set algs, notation and key hints in the mono stack.
- **Do** design at phone width first, single column, then add padding on desktop.
- **Do** pair every set color with its set name.

### Don't:
- **Don't** add web fonts or any font loading.
- **Don't** use shadows, gradients, glass effects or blur.
- **Don't** use corners rounder than 2px on controls or panels.
- **Don't** open modal dialogs. Notes edit in place; menus and drawers overlay without blocking.
- **Don't** animate transitions unless the motion conveys a state change (3D move playback is that state change).
- **Don't** use set colors outside the home stats.
- **Don't** design a desktop layout and shrink it.
