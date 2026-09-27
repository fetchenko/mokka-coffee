import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { sections } from "@/config/navigation";
import { CalendarDays, Coffee, Smile } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    title: "100%",
    descriptionKey: "arabicaBeans",
    icon: Coffee,
  },
  {
    title: "5000+",
    descriptionKey: "happyCustomers",
    icon: Smile,
  },
  {
    title: "5",
    descriptionKey: "yearsInTown",
    icon: CalendarDays,
  },
] as const;

export function AboutUs() {
  return (
    <TranslationWrapper section="aboutUs">
      {({ translations }) => (
        <Section id={sections.aboutUs}>
          <Container>
            <Heading variant="eyebrow">{translations.eyebrow}</Heading>
            <Heading variant="section">{translations.title}</Heading>
            <Image
              src="/assets/about-us.webp"
              alt={translations.imageAlt}
              width={1000}
              height={700}
              className="h-80 w-full rounded-lg object-cover"
            />
            <div>
              <Text variant="body">{translations.description}</Text>
              <Button asChild>
                <Link href={sections.visitUs}>{translations.visitCta}</Link>
              </Button>
              <ul className="divide-accent-muted mt-10 flex max-w-md flex-col gap-4 divide-y text-sm">
                {stats.map(({ icon: Icon, title, descriptionKey }) => (
                  <li key={title} className="flex items-center gap-4 py-4">
                    <Icon className="size-10 shrink-0 stroke-1" aria-hidden />
                    <div>
                      <p className="text-xl leading-tight font-semibold">
                        {title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {translations.stats[descriptionKey]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      )}
    </TranslationWrapper>
  );
}
