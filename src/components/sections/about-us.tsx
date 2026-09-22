import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { sections } from "@/config/navigation";
import { CalendarDays, Coffee, Smile } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    title: "100%",
    description: "Arabica beans",
    icon: Coffee,
  },
  {
    title: "5000+",
    description: "Happy customers",
    icon: Smile,
  },
  {
    title: "5",
    description: "Years in town",
    icon: CalendarDays,
  },
];

export function AboutUs() {
  return (
    <Section id={sections.aboutUs}>
      <Container>
        <Heading variant="eyebrow">About us</Heading>
        <Heading variant="section">More than just coffee</Heading>
        <Image
          src="/assets/about-us.webp"
          alt="Inside Mokka"
          width={1000}
          height={700}
          className="h-80 w-full rounded-lg object-cover"
        />
        <div>
          <Text variant="body">
            Mokka is a place where passion for coffee meets good vibes. We
            select the best beans from around the world and brew each cup with
            care. Come in, slow down and enjoy.
          </Text>
          <Button asChild>
            <Link href={sections.visitUs}>Visit us</Link>
          </Button>
          <ul className="divide-accent-muted mt-10 flex max-w-md flex-col gap-4 divide-y text-sm">
            {stats.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-center gap-4 py-4">
                <Icon className="size-10 shrink-0 stroke-1" aria-hidden />
                <div>
                  <p className="text-xl leading-tight font-semibold">{title}</p>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
