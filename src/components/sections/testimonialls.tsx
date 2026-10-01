"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils/cn";
import { testimonials } from "@/features/menu/testimonials";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import type { Dictionary } from "@/i18n/dictionaries/en";

const DISPLAY_ITEMS = 2;

type TestimonialsProps = {
  translations: Dictionary["testimonials"];
};

export function Testimonialls({ translations }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => Math.min(current + 1, testimonials.length - 1));
  };

  const goToPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <Section>
      <Container className="grid gap-8 pt-12 lg:grid-cols-3 lg:gap-6 lg:pt-16">
        <div>
          <Heading variant="eyebrow">{translations.eyebrow}</Heading>
          <Heading variant="section">{translations.title}</Heading>
        </div>

        <div className="overflow-hidden lg:hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: "translateX(-" + activeIndex * 100 + "%)" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.nameKey} className="w-full shrink-0">
                <TestimonialCard
                  translations={translations}
                  testimonial={testimonial}
                  onPrevious={goToPrevious}
                  onNext={goToNext}
                  showNavigation
                  showPrevious={index > 0}
                  showNext={index < testimonials.length - 1}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-1">
            {testimonials.map((testimonial, index) => (
              <Button
                key={testimonial.nameKey}
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

        {testimonials.slice(0, DISPLAY_ITEMS).map((testimonial) => (
          <div key={testimonial.nameKey} className="hidden lg:block">
            <TestimonialCard
              translations={translations}
              testimonial={testimonial}
              onPrevious={goToPrevious}
              onNext={goToNext}
            />
          </div>
        ))}
      </Container>
    </Section>
  );
}
