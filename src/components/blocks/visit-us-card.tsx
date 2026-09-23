import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const ADDRESS = ["ul. kawiorniarna 12", "31-123 Krakow, Poland"];
const HOURS = ["Mon - Fri: 7:00 - 20:00", "Sat - Sun: 8:00 - 21:00"];
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland";

export function VisitUsCard() {
  return (
    <div className="section-dark bg-background text-foreground rounded-lg p-6 md:p-8">
      <MapPin className="text-primary mb-8 size-7" aria-hidden="true" />
      <div className="mb-8 space-y-2">
        <Heading variant="eyebrow">Visit us</Heading>
        <Heading variant="section">We'd love to see you!</Heading>
      </div>
      <div className="space-y-5">
        <address className="not-italic">
          {ADDRESS.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
        <div>
          {HOURS.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
      <Button className="mt-8" asChild>
        <Link href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
          <Navigation aria-hidden="true" />
          Get directions
        </Link>
      </Button>
    </div>
  );
}
