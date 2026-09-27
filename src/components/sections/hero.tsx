import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Coffee, Heart, Leaf, Map, Users } from "lucide-react";
import Link from "next/link";

const featureIcons = [Coffee, Leaf, Heart, Users];

export function Hero() {
  return (
    <TranslationWrapper section="hero">
      {({ translations }) => (
        <Section
          tone="dark"
          className="relative isolate min-h-svh overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[url('/assets/hero.webp')] bg-cover bg-[60%_center] bg-no-repeat"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
          />

          <Container className="flex min-h-svh flex-col pt-28 pb-10 lg:pt-32 lg:pb-16">
            <div className="max-w-xl">
              <h1 className="font-display text-[clamp(3.5rem,14vw,5.5rem)] leading-[1.1] font-semibold tracking-[-0.045em] lg:text-[clamp(4.5rem,6vw,6rem)]">
                <span className="block">{translations.title}</span>
                <span className="text-primary block leading-[0.88]">
                  {translations.titleAccent}
                </span>
              </h1>

              <p className="text-foreground/85 mt-6 max-w-2xs text-base leading-relaxed sm:text-lg md:max-w-xs">
                {translations.description}
              </p>

              <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
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
            </div>

            <div className="mt-auto grid grid-cols-4 gap-1 pt-16 sm:gap-5 lg:max-w-3xl lg:gap-8 lg:pb-2">
              {translations.features.map((feature, index) => {
                const Icon = featureIcons[index];

                return (
                  <div
                    key={feature.label}
                    className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left lg:items-start"
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn(
                        "m-1 size-6 shrink-0 sm:size-10",
                        index < 2 ? "text-primary" : "text-foreground",
                      )}
                    />
                    <span className="text-foreground max-w-28 text-[11px] leading-tight sm:text-sm">
                      <span>{feature.label}</span>
                      <span className="text-muted-foreground hidden text-[10px] leading-tight sm:block">
                        {feature.description}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}
    </TranslationWrapper>
  );
}
