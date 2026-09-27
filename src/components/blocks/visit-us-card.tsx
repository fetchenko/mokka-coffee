import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const ADDRESS = ["ul. kawiorniarna 12", "31-123 Krakow, Poland"];
const HOURS_KEYS = ["weekdays", "weekends"] as const;
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland";

export function VisitUsCard({
  translations,
}: {
  translations: {
    eyebrow: string;
    title: string;
    weekdays: string;
    weekends: string;
    getDirections: string;
  };
}) {
  return (
    <div className="section-dark bg-background text-foreground rounded-lg p-6 md:p-8">
      <MapPin className="text-primary mb-8 size-7" aria-hidden="true" />
      <div className="mb-8 space-y-2">
        <Heading variant="eyebrow">{translations.eyebrow}</Heading>
        <Heading variant="section">{translations.title}</Heading>
      </div>
      <div className="space-y-5">
        <address className="not-italic">
          {ADDRESS.map((line) => (
            <div key={key}>{translations[key]}</div>
          ))}
        </address>
        <div>
          {HOURS_KEYS.map((key) => (
            <div key={line}>{line}</div>
          ))}
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
