"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils/cn";
import { testimonials, type LocalizedTestimonial } from "@/features/menu/testimonials";
import { TestimonialCard } from "@/components/blocks/testimonial-card";

const DISPLAY_ITEMS = 2;

type TestimonialsProps = {
  translations: {
    eyebrow: string;
    title: string;
    previous: string;
    next: string;
    show: string;
    items: Record<"anna" | "magda" | "julia", string>;
  };
};

export function Testimonialls({ translations }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const localizedTestimonials: LocalizedTestimonial[] = testimonials.map(
    ({ bodyKey, ...testimonial }) => ({
      ...testimonial,
      body: translations.items[bodyKey],
    }),
  );

  const goToNext = () => {
    setActiveIndex((current) =>
      Math.min(current + 1, localizedTestimonials.length - 1),
    );
  };

  const goToPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <Section>
      <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-3 lg:gap-6">
        <div>
          <Heading variant="eyebrow">{translations.eyebrow}</Heading>
          <Heading variant="section">{translations.title}</Heading>
        </div>

        <div className="overflow-hidden lg:hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: "translateX(-" + activeIndex * 100 + "%)" }}
          >
            {localizedTestimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <TestimonialCard
                  testimonial={testimonial}
                  onPrevious={goToPrevious}
                  onNext={goToNext}
                  previousLabel={translations.previous}
                  nextLabel={translations.next}
                  showNavigation
                  showPrevious={index > 0}
                  showNext={index < localizedTestimonials.length - 1}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-1">
            {localizedTestimonials.map((testimonial, index) => (
              <Button
                key={testimonial.name}
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={translations.show + " " + (index + 1)}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className="hover:bg-transparent"
              >
                <span
                  className={cn(
                    "size-4 rounded-full",
                    activeIndex === index ? "bg-primary" : "bg-primary/30",
                  )}
                />
              </Button>
            ))}
          </div>
        </div>

        {localizedTestimonials.slice(0, DISPLAY_ITEMS).map((testimonial) => (
          <div key={testimonial.name} className="hidden lg:block">
            <TestimonialCard
              testimonial={testimonial}
              onPrevious={goToPrevious}
              onNext={goToNext}
              previousLabel={translations.previous}
              nextLabel={translations.next}
            />
          </div>
        ))}
      </Container>
    </Section>
  );
}
