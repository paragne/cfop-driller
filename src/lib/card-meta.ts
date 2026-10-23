import type { Case, CaseSet } from "../data/algorithms.ts";
import { SET_GROUP } from "../data/algorithms.ts";

// The card's meta line: the section and the case's place in it, counted among
// the cases sharing its group and section in stored order, so it reads the
// same whichever sets the session drew from. The group leads only when the
// chosen sets mix groups; with one group it would say what the player chose.
export function cardMeta(cases: readonly Case[], c: Case, sets: readonly CaseSet[]): string {
  const peers = cases.filter((peer) => peer.group === c.group && peer.section === c.section);
  const line = `${c.section} · ${peers.indexOf(c) + 1}/${peers.length}`;
  return new Set(sets.map((set) => SET_GROUP[set])).size > 1 ? `${c.group} · ${line}` : line;
}
