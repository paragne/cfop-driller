import logoMark from "../assets/logo-mark.svg";
import { el } from "./dom.ts";
import { BACK_ICON, HELP_ICON, MENU_ICON, NOTE_EDIT_ICON } from "./icons.ts";

type Handlers = {
  onHome: () => void;
  onMenu: () => void;
  onHelp: () => void;
  onNotes: () => void;
  onBack: () => void;
};

function iconButton(className: string, label: string, markup: string, onClick: () => void) {
  const node = el("button", className);
  node.type = "button";
  node.setAttribute("aria-label", label);
  node.title = label;
  // Markup from a constant or a bundled asset URL, never from user text.
  node.innerHTML = markup;
  node.addEventListener("click", onClick);
  return node;
}

export function createTopbar({ onHome, onMenu, onHelp, onNotes, onBack }: Handlers) {
  const home = iconButton("logo", "CFOP Driller, home", `<img src="${logoMark}" alt="" />`, onHome);
  const back = iconButton("icon", "Back", BACK_ICON, onBack);
  back.hidden = true;
  const menu = iconButton("icon", "Menu", MENU_ICON, onMenu);
  menu.setAttribute("aria-expanded", "false");
  const help = iconButton("icon", "How to use", HELP_ICON, onHelp);
  help.setAttribute("aria-expanded", "false");
  const notes = iconButton("icon", "Edit hint", NOTE_EDIT_ICON, onNotes);
  notes.hidden = true;

  // Empty, the left cell would let the logo drift off center.
  const left = el("div", "topbar-left");
  left.append(back, menu);
  const tools = el("div", "tools");
  tools.append(notes, help);
  const element = el("header", "topbar");
  element.append(left, home, tools);

  return {
    element,
    menuButton: menu,
    helpButton: help,
    setMenuOpen(open: boolean): void {
      menu.setAttribute("aria-expanded", String(open));
    },
    setHelpOpen(open: boolean): void {
      help.setAttribute("aria-expanded", String(open));
    },
    // A gallery card is the only screen with somewhere to go back to.
    setBack(available: boolean): void {
      back.hidden = !available;
    },
    // The menu holds data on the home screen and card toggles on a card; the
    // how-to belongs to the home screen alone.
    setTools(menuAvailable: boolean, helpAvailable: boolean): void {
      menu.hidden = !menuAvailable;
      help.hidden = !helpAvailable;
    },
    // Only a Learn or Drill card has a note to write.
    setNotesAvailable(available: boolean): void {
      notes.hidden = !available;
    },
  };
}
