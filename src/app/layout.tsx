import type { Metadata } from "next";
import "./globals.css";
import { inter, playfair } from "@/app/fonts";

export const metadata: Metadata = {
  title: "MOKKA — Specialty Coffee",
  description: "MOKKA — Specialty Coffee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
