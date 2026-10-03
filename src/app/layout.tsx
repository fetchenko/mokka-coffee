import type { Metadata } from "next";
import { inter, playfair } from "@/app/fonts";
import { getLocale } from "@/i18n/get-locale";

import "./globals.css";

export const metadata: Metadata = {
  title: "MOKKA — Coffee Shop Website Concept",
  description:
    "MOKKA is a fictional coffee shop website concept created as a frontend development portfolio project.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
