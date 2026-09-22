import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const ADDRESS = ["ul. kawiorniarna 12", "31-123 Krakow, Poland"];
const HOURS = ["Mon - Fri: 7:00 - 20:00", "Sat - Sun: 8:00 - 21:00"];
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland";

export function Contact() {
  return (
    <Section>
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading variant="eyebrow">Contact us</Heading>
          <Heading variant="section">Let's talk coffee</Heading>
          <Text className="mx-auto mt-3 max-w-2xl">
            Have a question about the menu, want to plan a visit, or just want
            to say hello? Send us a message and we'll get back to you.
          </Text>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <aside className="section-dark rounded-lg bg-background p-6 text-foreground lg:p-8">
            <MapPin className="mb-6 size-7 text-primary" aria-hidden="true" />
            <Heading variant="block">Come by for a coffee</Heading>
            <address className="mt-5 space-y-1 text-sm not-italic">
              {ADDRESS.map((line) => <div key={line}>{line}</div>)}
            </address>
            <div className="text-muted-foreground mt-5 space-y-1 text-sm">
              {HOURS.map((line) => <div key={line}>{line}</div>)}
            </div>
            <Button className="mt-7" asChild>
              <Link href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" />
                Get directions
              </Link>
            </Button>
          </aside>

          <div className="lg:col-span-2">
            <Heading variant="block">Send us a message</Heading>
            <Text variant="small" className="mt-2">
              We're happy to help with questions about our coffee, opening
              hours, or your next visit.
            </Text>

            <form className="mt-7 space-y-4">
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
                <textarea name="message" rows={7} required className="border-input bg-background focus-visible:ring-ring w-full resize-y rounded-sm border px-4 py-3 text-sm outline-none focus-visible:ring-1" />
              </label>
              <Button type="button">Send message</Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
