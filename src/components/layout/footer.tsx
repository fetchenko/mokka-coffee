import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Camera, FileUser, Turntable } from "lucide-react";
import Link from "next/link";
import { navigation, socialLinks } from "@/config/navigation";
import { getLocale } from "@/i18n/get-locale";

const FOOTER_DESCRIPTION = "Good coffee, good people, good days";
const FOOTER_COPYRIGHT = `Mokka Coffee. All rights reserved`;

const FOOTER_LINKS = [
  { label: "Home", href: navigation.home },
  { label: "Menu", href: navigation.menu },
  { label: "About", href: navigation.about },
  { label: "Contact", href: navigation.contact },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", href: socialLinks.instagram, icon: Camera },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: FileUser },
  { label: "Spotify", href: socialLinks.spotify, icon: Turntable },
] as const;

export async function Footer() {
  const locale = await getLocale();

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

          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-start"
          >
            {FOOTER_LINKS.map(({ label, href }) => (
              <Button
                key={href}
                variant="link"
                asChild
                className="text-foreground px-0 capitalize"
              >
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

          <div className="text-muted-foreground flex flex-col justify-between gap-4">
            <LanguageSwitcher locale={locale} />
            <small>
              {`${new Date().getFullYear()} `}
              {FOOTER_COPYRIGHT}
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
}
