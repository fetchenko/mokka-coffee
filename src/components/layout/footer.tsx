import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Camera, FileUser, Turntable } from "lucide-react";
import Link from "next/link";
import { navigation, socialLinks } from "@/config/navigation";

const FOOTER_LINKS = [
  { key: "home", href: navigation.home },
  { key: "menu", href: navigation.menu },
  { key: "about", href: navigation.about },
  { key: "contact", href: navigation.contact },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", href: socialLinks.instagram, icon: Camera },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: FileUser },
  { label: "Spotify", href: socialLinks.spotify, icon: Turntable },
] as const;

type FooterProps = {
  translations: Dictionary["footer"];
  locale: Locale;
};

export function Footer({ translations, locale }: FooterProps) {
  return (
    <footer className="section-dark bg-background text-foreground">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-4">
          <div>
            <Logo translations={translations.logo} />
            <p className="text-muted-foreground pt-4 text-xs">
              {translations.description}
            </p>
          </div>
          <nav
            aria-label={translations.navigation}
            className="flex flex-col items-start"
          >
            {FOOTER_LINKS.map(({ key, href }) => (
              <Button
                key={href}
                variant="link"
                asChild
                className="text-foreground px-0 capitalize"
              >
                <Link href={href}>{translations.navigationItems[key]}</Link>
              </Button>
            ))}
          </nav>
          <div>
            <p className="pb-4 uppercase">{translations.followUs}</p>
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
            <LanguageSwitcher
              locale={locale}
              language={translations.language}
            />
            <small>
              {new Date().getFullYear()} {translations.copyright}
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
}
