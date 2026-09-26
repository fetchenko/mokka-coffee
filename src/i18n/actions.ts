"use server";

import { cookies } from "next/headers";

import { isSupportedLocale, type Locale } from "./config";

export async function setLocale(locale: Locale) {
  if (!isSupportedLocale(locale)) {
    throw new Error("Unsupported locale");
  }

  const cookieStore = await cookies();

  cookieStore.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
