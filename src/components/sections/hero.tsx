import { Button } from "@/components/ui/button";
import { Coffee, Heart, Leaf, Map, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    label: "Specialty coffee",
    shortLabel: 'Specialty coffee',
    description: "Top quality beans",
    icon: Coffee,
    accent: true,
  },
  {
    label: "Sustainable & eco-friendly",
    shortLabel: "Sustainable",
    description: "Eco-friendly",
    icon: Leaf,
    accent: true,
  },
  {
    label: "Made with love",
    shortLabel: "Made with love",
    description: "For you",

    icon: Heart,
    accent: false,
  },
  {
    label: "Community & warm",
    shortLabel: "Community",
    description: "Local & warm",

    icon: Users,
    accent: false,
  },
];

export function Hero() {
  return (
    <div className="relative isolate min-h-svh overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/assets/hero-2.webp')] bg-cover bg-[60%_center] bg-no-repeat lg:bg-[60%_center]"
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

      <div className="flex min-h-svh flex-col px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="max-w-xl pt-8 sm:pt-12 lg:pt-16">
          <h1 className="font-display text-[clamp(3.5rem,14vw,5.5rem)] leading-[1.1] font-semibold tracking-[-0.045em] lg:text-[clamp(4.5rem,7vw,7rem)]">
            <span className="text-foreground block">Good days</span>
            <span className="text-primary block leading-[0.88]">start with coffee</span>
          </h1>

          <p className="text-foreground/85 mt-6  max-w-2xs md:max-w-xs  text-base leading-relaxed sm:text-lg">
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

        <div className="mt-auto grid grid-cols-4 gap-2 pt-16 sm:gap-5 lg:max-w-3xl lg:gap-8 lg:pb-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
              >
                <Icon
                  aria-hidden="true"
                  className={`size-6 shrink-0 sm:size-10 ${feature.accent ? "text-primary" : "text-foreground"} `}
                  strokeWidth={1.75}
                />

                <span className=" text-foreground max-w-28 text-[11px] leading-tight sm:text-sm">
                  <span className="md:hidden">
                    {feature.label}
                  </span>
                  <span className="hidden md:block font-semibold">
                    {feature.shortLabel}
                  </span>
                </span>
                <span className="hidden md:block text-muted max-w-30 text-[10px] leading-tight sm:text-sm">
                  {feature.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
