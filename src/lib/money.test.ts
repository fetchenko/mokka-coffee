import { describe, expect, it } from "vitest";
import { formatPrice } from "./money";

const normalizeWhitespace = (value: string) => value.replace(/\u00a0/g, " ");

describe("formatPrice", () => {
  it("formats PLN for Polish locale", () => {
    expect(normalizeWhitespace(formatPrice(900, "PLN", "pl-PL"))).toBe(
      "9,00 zł",
    );
  });

  it("formats EUR for Polish locale", () => {
    expect(normalizeWhitespace(formatPrice(750, "EUR", "pl-PL"))).toBe(
      "7,50 €",
    );
  });

  it("formats zero for Polish locale", () => {
    expect(normalizeWhitespace(formatPrice(0, "PLN", "pl-PL"))).toBe("0,00 zł");
  });
});
