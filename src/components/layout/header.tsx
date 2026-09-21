"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MapPin, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { useInView } from "react-intersection-observer";
import { Logo } from "@/components/ui/logo";

const NAVIGATION_ITEMS = [
  { label: "Home", href: navigation.home },
  { label: "Menu", href: navigation.menu },
  { label: "About", href: navigation.about },
  { label: "Contact", href: navigation.contact },
] as const;

export function Header({ className }: { className?: string }) {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { ref: topSentinelRef, inView: isAtTop } = useInView({
    threshold: 0,
  });

  const isHeaderSolid = !isAtTop || isMenuOpen;

  const isActive = (href: string) => {
    if (href === navigation.home) {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Sentinel used to detect whether the page is at the top */}
      <div ref={topSentinelRef} aria-hidden="true" className="absolute top-0 left-0 h-px w-px" />
      <header
        className={cn(
          "text-foreground",
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isHeaderSolid ? "bg-background/80 backdrop-blur-md" : "bg-transparent",
          className,
        )}
      >
        <Container className="h-header grid grid-cols-[1fr_auto_1fr] items-center">
          <Link
            href={navigation.home}
            aria-label="Mokka Coffee home"
            className="justify-self-start"
          >
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAVIGATION_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative py-2 text-sm font-medium",
                        "transition-opacity duration-200 hover:opacity-70",
                        active && "underline underline-offset-4",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Button className="hidden w-fit justify-self-end md:flex" variant="outline" asChild>
            <Link href={navigation.visitUs}>
              <MapPin aria-hidden="true" />
              visit us
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-foreground col-start-3 justify-self-end bg-transparent md:hidden"
            size="icon"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </Container>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
            isMenuOpen
              ? "pointer-events-auto max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <nav
            aria-label="Mobile navigation"
            className="bg-background/80 px-6 py-6 backdrop-blur-md"
          >
            <ul className="flex flex-col">
              {NAVIGATION_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href} className="border-foreground/10 border-b last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block py-4 text-sm tracking-[0.12em] uppercase",
                        active && "underline underline-offset-4",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="px-8 pt-5">
                <Button variant="outline" asChild>
                  <Link
                    href={navigation.visitUs}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full"
                  >
                    <MapPin aria-hidden="true" />
                    Visit Us
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
