import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Coffee, Heart, Leaf, Map, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    label: "Specialty coffee",
    description: "Top quality beans",
    icon: Coffee,
    accent: true,
  },
  {
    label: "Sustainable",
    description: "Eco-friendly",
    icon: Leaf,
    accent: true,
  },
  {
    label: "Made with love",
    description: "For you",
    icon: Heart,
    accent: false,
  },
  {
    label: "Community",
    description: "Local & warm",
    icon: Users,
    accent: false,
  },
];

export function Hero() {
  return (
    <Section tone="dark" className="relative isolate min-h-svh overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/assets/hero-2.webp')] bg-cover bg-[60%_center] bg-no-repeat"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
      />

      {/* Additional bottom gradient for feature readability */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
      />

      <Container className="flex min-h-svh flex-col pt-28 pb-10 lg:pt-32 lg:pb-16">
        <div className="max-w-xl">
          <h1 className="font-display text-[clamp(3.5rem,14vw,5.5rem)] leading-[1.1] font-semibold tracking-[-0.045em] lg:text-[clamp(4.5rem,6vw,6rem)]">
            <span className="block">Good days</span>
            <span className="text-primary block leading-[0.88]">start with coffee</span>
          </h1>

          <p className="text-foreground/85 mt-6 max-w-2xs text-base leading-relaxed sm:text-lg md:max-w-xs">
            Specialty coffee, cozy atmosphere, and friendly people.
          </p>

          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/menu">See our menu</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/visit-us">
                <Map />
                Visit us
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-4 gap-1 pt-16 sm:gap-5 lg:max-w-3xl lg:gap-8 lg:pb-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left lg:items-start"
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "size-6 m-1 shrink-0 sm:size-10",
                    feature.accent ? "text-primary" : "text-foreground",
                  )}
                  strokeWidth={1.75}
                />
                <span className="text-foreground max-w-28 text-[11px] leading-tight sm:text-sm">
                  <span >{feature.label}</span>
                  <span className="hidden sm:block text-muted-foreground text-[10px] leading-tight">
                    {feature.description}
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
