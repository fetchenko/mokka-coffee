import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { sections } from "@/config/navigation";
import { ContactBlock } from "@/components/blocks/contact-block";
import { MapEmbed } from "@/components/blocks/map-embed";
import { VisitUsCard } from "@/components/blocks/visit-us-card";
import type { Dictionary } from "@/i18n/dictionaries/en";

type VisitUsProps = {
  translations: Dictionary["visitUs"];
};

export function VisitUs({ translations }: VisitUsProps) {
  return (
    <Section id={sections.visitUs}>
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          <VisitUsCard translations={translations} />
          <MapEmbed translations={translations} />
          <ContactBlock translations={translations} />
        </div>
      </Container>
    </Section>
  );
}
