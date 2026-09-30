import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Coffee, Heart, Leaf, Map, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    labelKey: "specialtyCoffee",
    descriptionKey: "topQualityBeans",
    icon: Coffee,
    accent: true,
  },
  {
    labelKey: "sustainable",
    descriptionKey: "ecoFriendly",
    icon: Leaf,
    accent: true,
  },
  {
    labelKey: "madeWithLove",
    descriptionKey: "forYou",
    icon: Heart,
    accent: false,
  },
  {
    labelKey: "community",
    descriptionKey: "localAndWarm",
    icon: Users,
    accent: false,
  },
] as const;

type HeroProps = {
  translations: Dictionary["hero"];
};

export function Hero({ translations }: HeroProps) {
  return (
    <Section tone="dark" className="relative isolate min-h-svh overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/assets/hero.webp')] bg-cover bg-position-[60%_center] bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/45 to-black/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 via-black/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
      />
      <Container className="flex min-h-svh flex-col pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="max-w-xl lg:mt-auto">
          <h1 className="font-display text-[clamp(3.5rem,14vw,5.5rem)] leading-[1.1] font-semibold tracking-[-0.045em] lg:text-[clamp(4.5rem,6vw,6rem)]">
            <span className="block">{translations.title}</span>
            <span className="text-primary block leading-[0.88]">
              {translations.titleAccent}
            </span>
          </h1>
          <p className="text-foreground/85 mt-5 max-w-2xs text-base leading-relaxed sm:text-lg md:max-w-xs">
            {translations.description}
          </p>
        </div>

        <div className="mt-auto mb-4 flex w-full max-w-sm flex-col gap-3 sm:flex-row lg:mt-8 lg:mb-auto">
          <Button asChild>
            <Link href="/menu">{translations.menuCta}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/visit-us">
              <Map />
              {translations.visitCta}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-1 sm:gap-5 lg:max-w-3xl lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.labelKey}
                className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left lg:items-start"
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "m-1 size-6 shrink-0 sm:size-10",
                    feature.accent ? "text-primary" : "text-foreground",
                  )}
                />
                <span className="text-foreground max-w-28 text-[11px] leading-tight sm:text-sm">
                  <span>{translations.features[feature.labelKey]}</span>
                  <span className="text-muted-foreground hidden text-[10px] leading-tight sm:block">
                    {translations.features[feature.descriptionKey]}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
