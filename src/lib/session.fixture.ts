import { CASE_SETS, SET_GROUP } from "../data/algorithms.ts";
import type { Case, CaseSet } from "../data/algorithms.ts";
import { defaultProgress } from "./progress.ts";
import type { Progress } from "./progress.ts";
import type { Session } from "./session.ts";
import type { Card } from "./srs.ts";

export const NOW = 1_800_000_000_000;
export const DAY = 86_400_000;

export const mk = (id: string, sets: CaseSet[] = ["F2L"]): Case => ({
  id,
  group: SET_GROUP[sets[0]],
  sets,
  section: "",
  name: null,
  aliases: [],
  algs: [{ display: "U", moves: "U" }],
  mask: { kind: "f2l", slot: "FR" },
  setup: null,
  videoUrl: null,
});

export const card = (over: Partial<Card> = {}): Card => ({
  ease: 2.5,
  interval: 6,
  reps: 2,
  due: NOW - 1,
  seen: 4,
  known: 3,
  lastGrade: 1,
  ...over,
});

export const ids = (s: Session) => s.queue.map((c) => c.id);

// A first visit chooses no sets, and no mode starts empty, so a test that
// starts a mode begins from a player who has picked some.
export const picked = (): Progress => {
  const base = defaultProgress();
  const sets: Progress["prefs"]["sets"] = {
    learn: ["F2L", "2-Look OLL", "2-Look PLL"],
    drill: ["F2L", "2-Look OLL", "2-Look PLL"],
    verify: ["2-Look OLL", "2-Look PLL"],
    gallery: [...CASE_SETS],
  };
  return { ...base, prefs: { ...base.prefs, sets } };
};
