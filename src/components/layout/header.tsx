"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-colors duration-300",
        isScrolled ? "bg-surface-inverse/80 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <Container className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Mokka Coffee home"
          className="text-primary-foreground justify-self-start"
        >
          <span className="block font-sans text-2xl leading-none tracking-[0.12em]">MOKKA</span>

          <span className="text-text-inverse-muted mt-1 block text-[0.5rem] tracking-[0.2em] uppercase">
            Specialty Coffee
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "relative py-2 text-sm font-medium",
                      "text-background transition-opacity duration-200",
                      "hover:opacity-70",
                      active
                        ? "after:bg-background after:absolute after:inset-x-0 after:bottom-0 after:h-px"
                        : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#visit-us"
          className={[
            "hidden md:inline-flex",
            "items-center gap-2 justify-self-end",
            "border-background/70 border px-5 py-2.5",
            "text-background text-sm font-medium",
            "transition-colors duration-200",
            "hover:bg-background hover:text-surface-inverse",
          ].join(" ")}
        >
          <MapPin aria-hidden="true" size={16} strokeWidth={1.75} />
          <span>Visit Us</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-primary-foreground col-start-3 justify-self-end md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={28} strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" size={28} strokeWidth={1.5} />
          )}
        </button>
      </Container>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation" className="bg-background px-6 py-6">
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href} className="border-foreground/10 border-b last:border-0">
                  <Link
                    href={item.href}
                    className={[
                      "block py-4 text-sm tracking-[0.12em] uppercase",
                      active ? "text-foreground font-medium" : "text-text-subtle",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-5">
              <Link
                href="/#visit-us"
                className={[
                  "inline-flex w-full items-center justify-center gap-2",
                  "border-foreground border px-5 py-3",
                  "text-sm font-medium tracking-[0.1em] uppercase",
                  "text-foreground",
                ].join(" ")}
              >
                <MapPin aria-hidden="true" size={16} strokeWidth={1.75} />
                Visit Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
