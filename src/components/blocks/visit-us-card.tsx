import type { Dictionary } from "@/i18n/dictionaries/en";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { MapPin } from "lucide-react";

export function VisitUsCard({
  translations,
}: {
  translations: Dictionary["visitUs"];
}) {
  return (
    <div className="section-dark bg-background text-foreground rounded-lg p-6 md:p-8">
      <MapPin className="text-primary mb-8 size-7" aria-hidden="true" />
      <div className="mb-8 space-y-2">
        <Text variant="eyebrow">{translations.eyebrow}</Text>
        <Heading variant="section" as="h2">{translations.title}</Heading>
      </div>
      <div className="space-y-5">
        <div>
          <div>{translations.addressLine1}</div>
          <div>{translations.addressLine2}</div>
        </div>
      </div>
      <p className="text-muted-foreground mt-8 text-sm leading-relaxed">
        {translations.locationDisclaimer}
      </p>
    </div>
  );
}
