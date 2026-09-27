import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { ContactBlock } from "@/components/blocks/contact-block";
import { VisitUsCard } from "@/components/blocks/visit-us-card";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";

export function Contact() {
  return (
    <TranslationWrapper section="visitUs">
      {({ translations }) => (
        <Section>
          <Container className="py-16 md:py-24">
            <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
              <VisitUsCard translations={translations} />

              <div className="lg:col-span-2">
                <ContactBlock translations={translations} />
              </div>
            </div>
          </Container>
        </Section>
      )}
    </TranslationWrapper>
  );
}
