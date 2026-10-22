import { el } from "./dom.ts";
import { dismissable } from "./panel.ts";

type Section = { title: string; note?: string; rows: readonly (readonly [string, string])[] };

// The notation the owner's hints are written in (docs/hints.md). Static text:
// nothing here is built from user input.
const SECTIONS: readonly Section[] = [
  {
    title: "Elements",
    rows: [
      ["sexy", "R U R' U'"],
      ["anti-sexy", "R U' R' U'"],
      ["insert", "U R U' R'"],
      ["sledge", "R' F R F'"],
      ["Su", "R U R' U (first half of Sune)"],
      ["Ne", "R U2' R' (second half of Sune)"],
    ],
  },
  {
    title: "Layer modifiers",
    rows: [
      ["fat", "first turn is 2 layers"],
      ["thick", "last turn is 2 layers"],
      ["wide", "first and last turn are 2 layers"],
    ],
  },
  {
    title: "Transforms",
    rows: [
      ["⇌alg⇌", "reverse: same moves, backward order, primes unchanged"],
      ["(alg)⁻¹", "inverse: backward order, flip every turn (X2 stays X2)"],
      ["||alg||", "left/right mirror: swap R↔L and r↔l, flip every turn except M (M stays M); y→y', z→z', x stays"],
      [
        "~alg~",
        "front/back mirror: swap F↔B and f↔b, flip every turn except S (S stays S); x→x', y→y', z stays. " +
          "For R/U/M/r-only algs: just flip every turn, keep faces",
      ],
    ],
  },
  {
    title: "Structure",
    rows: [
      ["n(alg)", "repeat alg n times"],
      ["[:n]", "first n moves of alg, drop the rest"],
      ["∧", "applies condition"],
      ["*", "definition of cited alg"],
      ["=", "\"explanation / other name\""],
    ],
  },
  {
    title: "Merge rule",
    note: "When chunks are joined, adjacent turns of the same face combine:",
    rows: [
      ["R' R'", "R2"],
      ["R R'", "nothing"],
      ["R R2", "R'"],
    ],
  },
  {
    title: "Commonly derived elements",
    rows: [
      ["~Ne~", "R' U2 R"],
      ["~Sune~", "R' U' R U' R' U2 R"],
      ["~sexy~", "R' U' R U"],
      ["sledge[:3]", "R' F R"],
      ["(sledge[:3])⁻¹", "R' F' R"],
    ],
  },
];

// A tab on the right edge and the drawer it opens. Not a dialog, like the
// other panels, so the card stays usable beside it on a wide screen.
export function createLegend(): readonly HTMLElement[] {
  const tab = el("button", "legend-tab", "Legend");
  tab.type = "button";
  tab.setAttribute("aria-expanded", "false");
  tab.setAttribute("aria-controls", "legend");

  const panel = el("aside", "legend");
  panel.id = "legend";
  panel.hidden = true;
  panel.setAttribute("aria-label", "Hint notation");
  const close = el("button", "legend-close", "Close");
  close.type = "button";
  const heading = el("div", "legend-head");
  heading.append(el("h2", "", "Hint notation"), close);
  panel.append(heading);
  for (const { title, note, rows } of SECTIONS) {
    const list = el("dl", "legend-list");
    for (const [term, meaning] of rows) list.append(el("dt", "", term), el("dd", "", meaning));
    panel.append(el("h3", "", title));
    if (note !== undefined) panel.append(el("p", "", note));
    panel.append(list);
  }

  const { toggle, close: hide } = dismissable(panel, tab, (open) => tab.setAttribute("aria-expanded", String(open)));
  tab.addEventListener("click", toggle);
  close.addEventListener("click", hide);
  return [tab, panel];
}
