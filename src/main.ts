import "./style.css";
import { ALL_CASES } from "./data/algorithms.ts";
import type { CaseSet } from "./data/algorithms.ts";
import { closeCase, openCase } from "./lib/gallery.ts";
import { caseView } from "./lib/play.ts";
import type { Aesthetic } from "./lib/aesthetic.ts";
import { SHIPPED_MODES } from "./lib/prefs.ts";
import type { Mode } from "./lib/prefs.ts";
import { defaultProgress } from "./lib/progress.ts";
import type { Progress } from "./lib/progress.ts";
import { loadHints, setAesthetic, setGuided, setMode, setNote, setNumberPref, setPref, setStar, toggleSet } from "./lib/progress-edit.ts";
import { chooseAlt, chooseCross, press, start } from "./lib/screen.ts";
import type { Action, Screen } from "./lib/screen.ts";
import { offeredSets } from "./lib/selection.ts";
import { starredAlg } from "./lib/stars.ts";
import { exportJson, importJson, load, save, wipe } from "./lib/storage.ts";
import { createCardMenu } from "./ui/card-menu.ts";
import { createCross } from "./ui/cross.ts";
import { createFlashcard } from "./ui/flashcard.ts";
import { createGallery } from "./ui/gallery.ts";
import { createHelp } from "./ui/help.ts";
import { createHome } from "./ui/home.ts";
import { createIntro } from "./ui/intro.ts";
import { createLegend } from "./ui/legend.ts";
import { bindKeys } from "./ui/keys.ts";
import { createMenu } from "./ui/menu.ts";
import { renderApp } from "./ui/render-app.ts";
import { createStatus } from "./ui/status.ts";
import { createSummary } from "./ui/summary.ts";
import { createTopbar } from "./ui/topbar.ts";
import { isTouchPrimary } from "./ui/touch.ts";
import { createVerify } from "./ui/verify.ts";

const NOT_SAVING = "Progress can't be saved in this browser. Export it to keep it.";
const SET_ASIDE = "Saved progress could not be read and was set aside. Starting fresh.";

const loaded = load(ALL_CASES);
let progress = loaded.progress;
let screen: Screen = { kind: "home" };
const touchPrimary = isTouchPrimary();

const status = createStatus();
const topbar = createTopbar({
  onHome: () => goHome(),
  onMenu: () => {
    help.close();
    (screen.kind === "home" ? menu : cardMenu).toggle();
  },
  onHelp: () => {
    menu.close();
    help.toggle();
  },
  onNotes: () => (screen.kind === "verify" ? verify.editNote() : flashcard.editNote()),
  onBack: () => show(closeCase(screen)),
});
// Starring the starred alg again clears it, back to the primary.
function star(algIndex: number): void {
  const view = caseView(screen);
  if (view === null) throw new Error("alg starred with no case on screen");
  commit(setStar(progress, view.c.id, starredAlg(view.c, progress.stars) === algIndex ? 0 : algIndex));
}
function note(text: string): void {
  const view = caseView(screen);
  if (view === null) throw new Error("note edited with no case on screen");
  persist(setNote(progress, view.c.id, text));
}

const play = {
  onStar: star,
  onSpeed: (speed: number) => commit(setNumberPref(progress, "speed", speed)),
  onAesthetic: (aesthetic: Aesthetic) => commit(setAesthetic(progress, aesthetic)),
  onZoom: (zoom: number) => commit(setNumberPref(progress, "zoom", zoom)),
};
const home = createHome({
  modes: SHIPPED_MODES,
  sets: offeredSets(ALL_CASES),
  onMode: (mode) => commit(setMode(progress, mode)),
  onSet: (set) => switchSet(set),
  onShuffle: () => commit(setPref(progress, "shuffle", !progress.prefs.shuffle)),
  onRotation: () => commit(setPref(progress, "randomRotation", !progress.prefs.randomRotation)),
  onStart: () => handle("reveal"),
});
const intro = createIntro({
  onBegin: () => handle("reveal"),
  onSkip: () => {
    if (screen.kind !== "intro") throw new Error("skip toggled outside the intro screen");
    commit(setPref(progress, screen.mode === "learn" ? "skipLearnIntro" : "skipDrillIntro", true));
  },
});
const flashcard = createFlashcard({
  onReveal: () => handle("reveal"),
  onDontKnow: () => handle("dontKnow"),
  onKnow: () => handle("know"),
  onNext: () => handle("next"),
  onNote: note,
  onStar: star,
  play,
});
const verify = createVerify({
  onPrimary: () => handle("reveal"),
  onMismatch: () => handle("dontKnow"),
  onMatch: () => handle("know"),
  onChoose: (i) => show(chooseAlt(screen, i)),
  onNote: note,
  onStar: star,
  onRestart: () => startMode("verify"),
  onHome: goHome,
  onSkipIntro: () => commit(setPref(progress, "skipVerifyIntro", true)),
  play,
});
const cross = createCross({ onReveal: () => handle("reveal"), onNext: () => handle("next"), onChoose: (i) => show(chooseCross(screen, i)), play });
const summary = createSummary(() => handle("reveal"), goHome);
const gallery = createGallery((c) => show(openCase(screen, c)), () => show(closeCase(screen)));
const menu = createMenu({
  cases: ALL_CASES,
  cardCount: () => Object.keys(progress.cards).length,
  onExport: () => exportJson(progress, Date.now()),
  onImport: (text, importMode) => {
    const result = importJson(text, importMode, progress, ALL_CASES, Date.now());
    if (result.ok) {
      progress = result.progress;
      if (screen.kind === "home") render();
      else if (screen.kind === "intro") startMode(screen.mode);
      else startMode(screen.kind);
    }
    return result;
  },
  onWipe: () => {
    const wiped = wipe();
    progress = defaultProgress();
    menu.close();
    status.show(wiped ? "Data wiped from this browser." : "Could not wipe this browser's storage.");
    render();
  },
  onLoadHints: () => {
    const { progress: next, added } = loadHints(progress, ALL_CASES);
    commit(next);
    return added;
  },
  notify: (message) => status.show(message),
  onOpenChange: (open) => topbar.setMenuOpen(open),
  trigger: topbar.menuButton,
});
const cardMenu = createCardMenu({
  onNames: () => handle("toggleNames"),
  onToggle: (key) => commit(setPref(progress, key, !progress.prefs[key])),
  onGuided: (on) => commit(setGuided(progress, on)),
  touchPrimary,
  onOpenChange: (open) => topbar.setMenuOpen(open),
  trigger: topbar.menuButton,
});
const help = createHelp(topbar.helpButton, (open) => topbar.setHelpOpen(open));

function persist(next: Progress): void {
  progress = next;
  status.show(save(progress, Date.now()) ? null : NOT_SAVING);
}

function commit(next: Progress): void {
  persist(next);
  render();
}

const context = () => ({ progress, cases: ALL_CASES, now: Date.now(), random: Math.random });

function show(next: Screen): void {
  screen = next;
  render();
}

function goHome(): void {
  show({ kind: "home" });
}

function startMode(mode: Mode): void {
  show(start(mode, context()));
}

function switchSet(set: CaseSet): void {
  const { mode } = progress.prefs;
  if (mode === "cross") throw new Error("set toggled in Cross, which has none");
  commit(toggleSet(progress, mode, set));
}

const render = (): void => renderApp({ topbar, menu, help, home, intro, cardMenu, flashcard, verify, cross, summary, gallery }, progress, screen);

function handle(action: Action): void {
  const next = press(screen, action, context());
  screen = next.screen;
  if (next.progress !== progress) persist(next.progress);
  render();
}

document.body.append(topbar.element, menu.element, cardMenu.element, help.element, status.element, home.element, createLegend(topbar.helpButton));
document.body.append(gallery.element, intro.element, flashcard.element, verify.element, cross.element, summary.element);
bindKeys(handle, (step) => flashcard.step(step) || verify.step(step) || cross.step(step), () => screen.kind === "drill" || screen.kind === "cross");
if (loaded.problem !== null) status.show(loaded.problem === "unreadable" ? SET_ASIDE : NOT_SAVING);
render();
