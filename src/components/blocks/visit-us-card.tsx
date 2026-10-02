import type { Dictionary } from "@/i18n/dictionaries/en";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland";

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
        <address className="not-italic">
          <div>{translations.addressLine1}</div>
          <div>{translations.addressLine2}</div>
        </address>
        <div>
          <div>{translations.weekdays}</div>
          <div>{translations.weekends}</div>
        </div>
      </div>
      <Button className="mt-8" asChild>
        <Link href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
          <Navigation aria-hidden="true" />
          {translations.getDirections}
        </Link>
      </Button>
    </div>
  );
}
