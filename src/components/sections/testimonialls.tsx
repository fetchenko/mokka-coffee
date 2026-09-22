"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils/cn";
import { testimonials } from "@/features/menu/testimonials";
import { TestimonialCard } from "@/components/blocks/testimonial-card";

const DISPLAY_ITEMS = 2;

export function Testimonialls() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => Math.min(current + 1, testimonials.length - 1));
  };

  const goToPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <Section>
      <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-3 lg:gap-6">
        <div>
          <Heading variant="eyebrow">our guests love us</Heading>
          <Heading variant="section">What people say</Heading>
        </div>

        <div className="overflow-hidden lg:hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: "translateX(-" + activeIndex * 100 + "%)" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <TestimonialCard
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
                key={testimonial.name}
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={"Show testimonial " + (index + 1)}
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
          <div key={testimonial.name} className="hidden lg:block">
            <TestimonialCard
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
