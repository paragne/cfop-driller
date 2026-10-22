import type { Case, CaseSet } from "../data/algorithms.ts";
import type { Aesthetic } from "./aesthetic.ts";
import type { Mode, SetMode } from "./prefs.ts";
import type { Progress } from "./progress.ts";
import { recordMatch, recordTime } from "./timed-stats.ts";

// An empty note is deleted rather than stored, matching what parsing does with
// an empty string, so clearing a note and reloading agree.
export function setNote(progress: Progress, id: string, text: string): Progress {
  const notes = { ...progress.notes };
  if (text === "") delete notes[id];
  else notes[id] = text;
  return { ...progress, notes };
}

// The owner's hints are offered, never imposed: a case the user already wrote a
// note for keeps it.
export function loadHints(progress: Progress, cases: readonly Case[]): { progress: Progress; added: number } {
  const notes = { ...progress.notes };
  let added = 0;
  for (const c of cases) {
    if (c.hint === undefined || c.id in notes) continue;
    notes[c.id] = c.hint;
    added++;
  }
  return { progress: { ...progress, notes }, added };
}

// Index 0 is what an unstarred case already uses, so it is deleted rather than
// stored, and un-starring and starting over agree.
export function setStar(progress: Progress, id: string, algIndex: number): Progress {
  const stars = { ...progress.stars };
  if (algIndex === 0) delete stars[id];
  else stars[id] = algIndex;
  return { ...progress, stars };
}

export function setPref(
  progress: Progress,
  key:
    | "showNames"
    | "showSolutions"
    | "showNotes"
    | "randomRotation"
    | "shuffle"
    | "threeD"
    | "showHotkeys"
    | "crossAllStickers"
    | "skipLearnIntro"
    | "skipDrillIntro"
    | "skipVerifyIntro",
  value: boolean,
): Progress {
  return { ...progress, prefs: { ...progress.prefs, [key]: value } };
}

export function setNumberPref(progress: Progress, key: "speed" | "zoom", value: number): Progress {
  return { ...progress, prefs: { ...progress.prefs, [key]: value } };
}

export function setAesthetic(progress: Progress, aesthetic: Aesthetic): Progress {
  return { ...progress, prefs: { ...progress.prefs, aesthetic } };
}

export function setMode(progress: Progress, mode: Mode): Progress {
  return { ...progress, prefs: { ...progress.prefs, mode } };
}

// Every set can be switched off: with none selected the home screen offers no
// Start, so an empty session never arises.
export function toggleSet(progress: Progress, mode: SetMode, set: CaseSet): Progress {
  const selected = progress.prefs.sets[mode];
  return withSets(progress, mode, selected.includes(set) ? selected.filter((s) => s !== set) : [...selected, set]);
}

const withSets = (progress: Progress, mode: SetMode, selected: CaseSet[]): Progress => ({
  ...progress,
  prefs: { ...progress.prefs, sets: { ...progress.prefs.sets, [mode]: selected } },
});

export function recordDrillTime(progress: Progress, id: string, elapsedMs: number): Progress {
  const stat = recordTime(progress.drillStats[id] ?? null, elapsedMs);
  return { ...progress, drillStats: { ...progress.drillStats, [id]: stat } };
}

export function recordVerifyTime(progress: Progress, id: string, elapsedMs: number): Progress {
  const prev = progress.verifyStats[id];
  const stat = { ...recordTime(prev ?? null, elapsedMs), matches: prev?.matches ?? 0 };
  return { ...progress, verifyStats: { ...progress.verifyStats, [id]: stat } };
}

export function recordVerifyMatch(progress: Progress, id: string): Progress {
  const stat = recordMatch(progress.verifyStats[id]);
  return { ...progress, verifyStats: { ...progress.verifyStats, [id]: stat } };
}
