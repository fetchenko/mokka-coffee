import { describe, expect, it } from "vitest";
import { formatPrice } from "./money";

const normalizeWhitespace = (value: string) => value.replace(/\u00a0/g, " ");

describe("formatPrice", () => {
  it("formats PLN", () => {
    expect(
      normalizeWhitespace(
        formatPrice({
          amount: 900,
          currency: "PLN",
        }),
      ),
    ).toBe("9,00 zł");
  });

  it("formats EUR", () => {
    expect(
      normalizeWhitespace(
        formatPrice({
          amount: 750,
          currency: "EUR",
        }),
      ),
    ).toBe("7,50 €");
  });

  it("formats zero", () => {
    expect(
      normalizeWhitespace(
        formatPrice({
          amount: 0,
          currency: "PLN",
        }),
      ),
    ).toBe("0,00 zł");
  });
});
