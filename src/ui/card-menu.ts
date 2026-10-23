import type { Progress } from "../lib/progress.ts";
import { el, keyedButton, toggleButton } from "./dom.ts";
import { dismissable } from "./panel.ts";

export type CardPref = "showSolutions" | "showNotes" | "showHotkeys" | "crossAllStickers" | "threeD";

type Handlers = {
  onNames: () => void;
  onToggle: (key: CardPref) => void;
  onGuided: (on: boolean) => void;
  // A touch-primary device has no keyboard to label, so the toggle never
  // shows there, regardless of the stored pref.
  touchPrimary: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: HTMLElement;
};

// Card behavior, not session setup, so it opens from the card screens and the
// home screen's menu carries only data.
export function createCardMenu({ onNames, onToggle, onGuided, touchPrimary, onOpenChange, trigger }: Handlers) {
  const blind = toggleButton("Blind", () => onGuided(false));
  const guided = toggleButton("Guided", () => onGuided(true));
  const names = keyedButton("toggle", "Names", "n", onNames);
  const notes = toggleButton("Hints", () => onToggle("showNotes"));
  const autoReveal = toggleButton("Auto-reveal", () => onToggle("showSolutions"));
  const hotkeys = toggleButton("Hotkeys", () => onToggle("showHotkeys"));
  const allStickers = toggleButton("All stickers", () => onToggle("crossAllStickers"));
  const threeD = toggleButton("3D", () => onToggle("threeD"));
  hotkeys.hidden = touchPrimary;
  const presets = el("div", "presets");
  presets.append(blind, guided);
  const toggles = el("div", "card-prefs");
  toggles.append(names.node, notes, autoReveal, hotkeys, allStickers, threeD);
  const element = el("section", "data card-menu");
  element.hidden = true;
  element.append(presets, toggles);

  return {
    element,
    ...dismissable(element, trigger, onOpenChange),
    render({ prefs }: Progress, threeDAvailable: boolean): void {
      const aids = [prefs.showNames, prefs.showSolutions, prefs.showNotes];
      blind.setAttribute("aria-pressed", String(aids.every((on) => !on)));
      guided.setAttribute("aria-pressed", String(aids.every((on) => on)));
      names.node.setAttribute("aria-pressed", String(prefs.showNames));
      names.kbd.hidden = !prefs.showHotkeys;
      autoReveal.setAttribute("aria-pressed", String(prefs.showSolutions));
      notes.setAttribute("aria-pressed", String(prefs.showNotes));
      hotkeys.setAttribute("aria-pressed", String(prefs.showHotkeys));
      allStickers.setAttribute("aria-pressed", String(prefs.crossAllStickers));
      // A mode, not a per-card choice, so it stays pressed from card to card.
      threeD.setAttribute("aria-pressed", String(prefs.threeD));
      threeD.hidden = !threeDAvailable;
      // Cross has no case to name or note and nothing to auto-reveal; the
      // sticker toggle is the one card setting it adds.
      const crossing = prefs.mode === "cross";
      names.node.hidden = crossing;
      notes.hidden = crossing;
      allStickers.hidden = !crossing;
      // Verify has no per-card solution reveal, since the algorithm only
      // appears after a Mismatch, and a gallery card always shows it.
      autoReveal.hidden = prefs.mode === "verify" || prefs.mode === "gallery" || crossing;
    },
  };
}
