import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { sections, navigation } from "@/config/navigation";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { CalendarDays, Coffee, Smile } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { title: "100%", descriptionKey: "arabicaBeans", icon: Coffee },
  { title: "5000+", descriptionKey: "happyCustomers", icon: Smile },
  { title: "5", descriptionKey: "yearsInTown", icon: CalendarDays },
] as const;

type AboutUsProps = {
  translations: Dictionary["aboutUs"];
};

export function AboutUs({ translations }: AboutUsProps) {
  return (
    <Section id={sections.aboutUs}>
      <Container className="pt-4 md:pt-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:gap-8 lg:gap-12">
          <Image
            src="/assets/about-us.webp"
            alt={translations.imageAlt}
            width={1000}
            height={700}
            className="hidden h-full min-h-80 w-full rounded-lg object-cover md:block"
          />

          <div>
            <Heading variant="eyebrow">{translations.eyebrow}</Heading>
            <Heading variant="section">{translations.title}</Heading>
            <Text variant="body" className="mt-6">
              {translations.description}
            </Text>
            <Button asChild className="mt-6">
              <Link href={navigation.contact}>{translations.contactCta}</Link>
            </Button>
          </div>

          <ul className="divide-accent-muted flex w-full flex-col divide-y text-sm md:w-fit">
            {stats.map(({ icon: Icon, title, descriptionKey }) => (
              <li
                key={title}
                className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
              >
                <Icon className="size-10 shrink-0 stroke-1" aria-hidden />
                <div>
                  <p className="text-xl leading-none font-semibold">{title}</p>
                  <p className="text-muted-foreground text-sm leading-tight">
                    {translations.stats[descriptionKey]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
