import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { ContactBlock } from "@/components/blocks/contact-block";
import { VisitUsCard } from "@/components/blocks/visit-us-card";

export function Contact() {
  return (
    <Section>
      <Container className="py-16 md:py-24">
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <VisitUsCard />

          <div className="lg:col-span-2">
            <ContactBlock />
          </div>
        </div>
      </Container>
    </Section>
  );
}
