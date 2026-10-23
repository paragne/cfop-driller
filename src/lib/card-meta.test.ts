import { describe, expect, it } from "vitest";
import { cardMeta } from "./card-meta.ts";
import { mk } from "./session.fixture.ts";

const a = { ...mk("a", ["Full OLL"]), section: "T Shapes" };
const b = { ...mk("b", ["Full OLL"]), section: "T Shapes" };
const c = { ...mk("c", ["Full OLL"]), section: "Dot Cases" };
const d = { ...mk("d", ["Full PLL"]), section: "T Shapes" };
const cases = [a, c, b, d];

describe("cardMeta", () => {
  it("counts a case among its section's cases in stored order", () => {
    expect([a, b, c].map((x) => cardMeta(cases, x, ["Full OLL"]))).toEqual(["T Shapes · 1/2", "T Shapes · 2/2", "Dot Cases · 1/1"]);
  });

  it("keeps a section name in two groups apart", () => {
    expect(cardMeta(cases, d, ["Full PLL"])).toBe("T Shapes · 1/1");
  });

  it("leads with the group only when the chosen sets mix groups", () => {
    expect(cardMeta(cases, b, ["2-Look OLL", "Full OLL"])).toBe("T Shapes · 2/2");
    expect(cardMeta(cases, b, ["Full OLL", "Full PLL"])).toBe("OLL · T Shapes · 2/2");
  });
});
