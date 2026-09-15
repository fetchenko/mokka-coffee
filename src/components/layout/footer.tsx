import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Camera, FileUser, Turntable } from "lucide-react";
import Link from "next/link";

const FOOTER_DESCRIPTION = "Good coffee, good people, good days";
const FOOTER_COPYRIGHT = `${new Date().getFullYear()} Mokka Coffee. All rights reserved`;

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: Camera },
  { label: "LinkedIn", href: "#", icon: FileUser },
  { label: "Spotify", href: "#", icon: Turntable },
];

export function Footer() {
  return (
    <footer className="section-dark bg-background text-foreground">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-4">
          <div>
            <Logo />
            <p className="text-muted-foreground hidden w-40 py-4 text-xs sm:block">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col items-start">
            {FOOTER_LINKS.map(({ label, href }) => (
              <Button key={href} variant="link" asChild className="text-foreground px-0 capitalize">
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>

          <div>
            <p className="pb-4 uppercase">Follow us</p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <Button size="icon" variant="outline" key={label} asChild>
                  <Link href={href} aria-label={label}>
                    <Icon />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-muted-foreground self-end">
            <small>{FOOTER_COPYRIGHT}</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}
