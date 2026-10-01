import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactBlock } from "@/components/blocks/contact-block";
import { MapEmbed } from "@/components/blocks/map-embed";
import { VisitUsCard } from "@/components/blocks/visit-us-card";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ContactProps = {
  translations: Dictionary["visitUs"];
};

export function Contact({ translations }: ContactProps) {
  return (
    <Section>
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <VisitUsCard translations={translations} />
          <MapEmbed translations={translations} />
          <ContactBlock translations={translations} />
        </div>
      </Container>
    </Section>
  );
}
