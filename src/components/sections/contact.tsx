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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <ContactBlock translations={translations} />
          <VisitUsCard translations={translations} />
        </div>

        <div className="mt-10 md:mt-12">
          <MapEmbed translations={translations} />
        </div>
      </Container>
    </Section>
  );
}
