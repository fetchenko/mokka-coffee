import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { sections } from "@/config/navigation";
import { ContactBlock } from "@/components/blocks/contact-block";
import { VisitUsCard } from "@/components/blocks/visit-us-card";

const MAP_URL =
  "https://www.google.com/maps?q=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland&output=embed";

export function VisitUs() {
  return (
    <Section id={sections.visitUs}>
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="section-dark bg-background text-foreground rounded-lg p-6 md:p-8">
            <VisitUsCard />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-lg md:min-h-0">
            <iframe
              title="Mokka Coffee location"
              src={MAP_URL}
              loading="lazy"
              className="absolute inset-0 size-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <ContactBlock />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
