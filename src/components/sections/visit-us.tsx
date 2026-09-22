import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { navigation, sections } from "@/config/navigation";

const ADDRESS = ["ul. kawiorniarna 12", "31-123 Krakow, Poland"];
const HOURS = ["Mon - Fri: 7:00 - 20:00", "Sat - Sun: 8:00 - 21:00"];
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland";
const MAP_URL = "https://www.google.com/maps?q=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland&output=embed";

function VisitDetails() {
  return (
    <div className="space-y-5">
      <address className="not-italic">
        {ADDRESS.map((line) => <div key={line}>{line}</div>)}
      </address>
      <div>{HOURS.map((line) => <div key={line}>{line}</div>)}</div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" type="text" autoComplete="name" required className="border-input bg-background focus-visible:ring-ring min-h-11 w-full rounded-sm border px-4 py-2 text-sm outline-none focus-visible:ring-1" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium">Your email</span>
          <input name="email" type="email" autoComplete="email" required className="border-input bg-background focus-visible:ring-ring min-h-11 w-full rounded-sm border px-4 py-2 text-sm outline-none focus-visible:ring-1" />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-medium">Message</span>
        <textarea name="message" rows={5} required className="border-input bg-background focus-visible:ring-ring w-full resize-y rounded-sm border px-4 py-3 text-sm outline-none focus-visible:ring-1" />
      </label>
      <Button type="button">Send message</Button>
    </form>
  );
}

export function VisitUs() {
  return (
    <Section id={sections.visitUs}>
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="section-dark rounded-lg bg-background p-6 text-foreground md:p-8">
            <MapPin className="mb-8 size-7 text-primary" aria-hidden="true" />
            <div className="mb-8 space-y-2">
              <Heading variant="eyebrow">Visit us</Heading>
              <Heading variant="section">We'd love to see you!</Heading>
            </div>
            <VisitDetails />
            <Button className="mt-8" asChild>
              <Link href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" />
                Get directions
              </Link>
            </Button>
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
              <Heading variant="eyebrow">Contact us</Heading>
              <Heading variant="section">Send us a message</Heading>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="relative mt-10 min-h-72 overflow-hidden rounded-lg md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
            alt="A cup of coffee at Mokka"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <p className="font-display text-3xl leading-tight font-bold">
              <span className="block text-white">Life happens</span>
              <span className="block text-primary">— coffee helps</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="link" asChild>
            <Link href={navigation.contact}>Contact us</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
