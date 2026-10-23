import type { Case } from "../data/algorithms.ts";
import { caseState } from "../lib/case-state.ts";
import type { Progress } from "../lib/progress.ts";
import { renderCase, viewFor } from "../lib/render.ts";
import { starredAlg } from "../lib/stars.ts";
import { el } from "./dom.ts";

// The grid is built once per Start and only hidden while a case is open, so
// the page can come back to the scroll position it was left at.
export function createGallery(onOpen: (c: Case) => void) {
  const element = el("main", "gallery");
  element.hidden = true;

  let builtFor = "";
  let wasOpen = false;
  let scrollY = 0;
  let latest: Progress | null = null;

  // One tooltip for the grid, filled when it shows, so a star or hint changed
  // on a card since the grid was built is what it says.
  const tip = el("div", "gallery-tip");
  tip.id = "gallery-tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  let timer = 0;
  let tipped: HTMLButtonElement | null = null;

  function hideTip(): void {
    clearTimeout(timer);
    tip.hidden = true;
    tipped?.removeAttribute("aria-describedby");
    tipped = null;
  }

  function showTip(button: HTMLButtonElement, c: Case): void {
    if (latest === null) throw new Error("gallery tooltip before render");
    const hint = latest.notes[c.id] ?? "";
    tip.replaceChildren(el("p", "gallery-tip-alg", c.algs[starredAlg(c, latest.stars)].display));
    if (hint !== "") tip.append(el("p", "gallery-tip-hint", hint));
    tip.hidden = false;
    button.setAttribute("aria-describedby", tip.id);
    tipped = button;
    // Below the case, or above it when the window would cut it off, and kept
    // inside the gallery's edges so it never makes the page scroll sideways.
    const area = element.getBoundingClientRect();
    const cell = button.getBoundingClientRect();
    const box = tip.getBoundingClientRect();
    const centered = cell.left + cell.width / 2 - box.width / 2 - area.left;
    tip.style.left = `${Math.max(0, Math.min(centered, area.width - box.width))}px`;
    const below = cell.bottom + box.height + 4 <= window.innerHeight;
    tip.style.top = `${(below ? cell.bottom + 4 : cell.top - box.height - 4) - area.top}px`;
  }

  function later(button: HTMLButtonElement, c: Case): void {
    hideTip();
    timer = window.setTimeout(() => showTip(button, c), 500);
  }

  function cell(c: Case): HTMLButtonElement {
    const label = c.name ?? c.section;
    const button = el("button", "gallery-cell");
    button.type = "button";
    button.setAttribute("aria-label", label);
    // Markup generated in lib from our own case data.
    button.innerHTML = renderCase(caseState(c), viewFor(c.mask));
    button.append(el("span", "gallery-name", label));
    button.addEventListener("click", () => {
      hideTip();
      onOpen(c);
    });
    // Touch has no hover, and a tap opens the case anyway.
    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") later(button, c);
    });
    button.addEventListener("pointerleave", hideTip);
    button.addEventListener("focus", () => {
      if (button.matches(":focus-visible")) later(button, c);
    });
    button.addEventListener("blur", hideTip);
    return button;
  }

  function build(sections: ReadonlyMap<string, readonly Case[]>): void {
    element.replaceChildren(
      ...[...sections.values()].flatMap((cases) => {
        const grid = el("div", "gallery-grid");
        grid.append(...cases.map(cell));
        return [el("h2", "gallery-title", `${cases[0].section} (${cases.length})`), grid];
      }),
      tip,
    );
  }

  return {
    element,
    // `sections` is null off the gallery screen and `open` is the case whose
    // card is up. The scroll is read before the grid hides, and put back after
    // it shows.
    render(sections: ReadonlyMap<string, readonly Case[]> | null, open: Case | null, progress: Progress): void {
      latest = progress;
      if (sections === null) {
        hideTip();
        element.hidden = true;
        builtFor = "";
        wasOpen = false;
        return;
      }
      const key = [...sections.values()].flatMap((cases) => cases.map((c) => c.id)).join();
      const isOpen = open !== null;
      if (key !== builtFor) {
        build(sections);
        builtFor = key;
        scrollY = 0;
        // A fresh grid is treated as returning from a card, at the top.
        wasOpen = true;
      }
      if (isOpen) hideTip();
      if (isOpen && !wasOpen) scrollY = window.scrollY;
      element.hidden = isOpen;
      if (isOpen !== wasOpen) window.scrollTo(0, isOpen ? 0 : scrollY);
      wasOpen = isOpen;
    },
  };
}
