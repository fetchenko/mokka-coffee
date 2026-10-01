import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactBlock } from "@/components/blocks/contact-block";
import { MapEmbed } from "@/components/blocks/map-embed";
import { VisitUsCard } from "@/components/blocks/visit-us-card";
import { Heading } from "@/components/ui/heading";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ContactProps = {
  translations: Dictionary["visitUs"];
};

export function Contact({ translations }: ContactProps) {
  return (
    <Section>
      <Container className="py-16 md:py-24">
        <div className="mb-10 max-w-2xl space-y-2 md:mb-12">
          <Heading variant="eyebrow" as="h1">
            {translations.contactEyebrow}
          </Heading>
          <Heading variant="section" as="h2">
            {translations.contactTitle}
          </Heading>
          <p className="text-muted-foreground max-w-xl">
            {translations.contactDescription}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
          <ContactBlock translations={translations} />

          <div className="space-y-6">
            <VisitUsCard translations={translations} />
            <MapEmbed translations={translations} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
