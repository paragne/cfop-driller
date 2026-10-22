import { ALL_CASES } from "../data/algorithms.ts";
import type { Case } from "../data/algorithms.ts";

// No OLL or PLL case keeps a second alg with a different outcome, so the star
// and choice tests put back the alternates oll-24 and oll-25 had until
// 2026-10-22. Each leaves the cube in a different permutation than algs[0].
function withAlt(id: string, display: string, moves: string): Case {
  const c = ALL_CASES.find((known) => known.id === id);
  if (c === undefined) throw new Error(`no case ${id}`);
  return { ...c, algs: [...c.algs, { display, moves }] };
}

export const OLL_24_TWO_ALGS = withAlt("oll-24", "U (R U R) D (R' U' R) D' R2", "U R U R D R' U' R D' R2");
export const OLL_25_TWO_ALGS = withAlt("oll-25", "U R2 D' (R U' R') D (R U R)", "U R2 D' R U' R' D R U R");
