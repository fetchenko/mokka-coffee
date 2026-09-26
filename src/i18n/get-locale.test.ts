import { beforeEach, describe, expect, it, vi } from "vitest";

import { cookies, headers } from "next/headers";

import { isSupportedLocale } from "./config";
import { getLocale, getLocaleFromAcceptLanguage } from "./get-locale";

vi.mock("next/headers", () => ({
  cookies: vi.fn(),
  headers: vi.fn(),
}));

describe("isSupportedLocale", () => {
  it.each(["en", "pl", "ru"])("returns true for %s", (locale) => {
    expect(isSupportedLocale(locale)).toBe(true);
  });

  it.each(["de", "en-US", "", undefined])(
    "returns false for unsupported locale %s",
    (locale) => {
      expect(isSupportedLocale(locale)).toBe(false);
    },
  );
});

describe("getLocaleFromAcceptLanguage", () => {
  it.each([
    ["de", null],
    ["en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7", "en"],
    ["da, en-gb;q=0.8, en;q=0.7", "en"],
    ["fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en"],
    ["pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7", "pl"],
    ["ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7", "ru"],
    ["EN-us,en;q=0.9", "en"],
  ])("returns %s for %s", (acceptLanguage, expected) => {
    expect(getLocaleFromAcceptLanguage(acceptLanguage)).toBe(expected);
  });

  it("returns the first supported language", () => {
    expect(getLocaleFromAcceptLanguage("de-DE,en-US;q=0.9")).toBe("en");
  });

  it.each([null, "", "de-DE"])(
    "returns null for %s",
    (acceptLanguage) => {
      expect(getLocaleFromAcceptLanguage(acceptLanguage)).toBeNull();
    },
  );
});

describe("getLocale", () => {
  const getCookie = vi.fn();
  const getHeader = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(cookies).mockResolvedValue({
      get: getCookie,
    } as Awaited<ReturnType<typeof cookies>>);

    vi.mocked(headers).mockResolvedValue({
      get: getHeader,
    } as Awaited<ReturnType<typeof headers>>);
  });

  it("uses a supported cookie locale", async () => {
    getCookie.mockReturnValue({ value: "pl" });
    getHeader.mockReturnValue("ru-RU");

    await expect(getLocale()).resolves.toBe("pl");
  });

  it("uses the browser locale when the cookie is unsupported", async () => {
    getCookie.mockReturnValue({ value: "de" });
    getHeader.mockReturnValue("ru-RU");

    await expect(getLocale()).resolves.toBe("ru");
  });

  it("uses the browser locale when there is no cookie", async () => {
    getCookie.mockReturnValue(undefined);
    getHeader.mockReturnValue("pl-PL");

    await expect(getLocale()).resolves.toBe("pl");
  });

  it("falls back to English for an unsupported browser locale", async () => {
    getCookie.mockReturnValue(undefined);
    getHeader.mockReturnValue("de-DE");

    await expect(getLocale()).resolves.toBe("en");
  });

  it("falls back to English when there is no cookie or browser locale", async () => {
    getCookie.mockReturnValue(undefined);
    getHeader.mockReturnValue(null);

    await expect(getLocale()).resolves.toBe("en");
  });
});
