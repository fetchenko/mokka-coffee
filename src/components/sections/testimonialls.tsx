"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const testimonials = [
  {
    body: "the best coffeee in town! cozy place and amazing vibes.",
    name: "Anna K.",
    initials: "AK",
    rating: 5.0,
  },
  {
    body: "i come here every morning. and delicious pastries.",
    name: "Magda L.",
    initials: "ML",
    rating: 4.8,
  },
  {
    body: "great coffee, friendly service, and a lovely atmosphere.",
    name: "Julia M.",
    initials: "JM",
    rating: 4.5,
  },
];

type Testimonial = (typeof testimonials)[number];

function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex gap-1"
      aria-label={value.toFixed(1) + " out of 5 stars"}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.min(Math.max(value - index, 0), 1) * 100;

        return (
          <span key={index} className="relative size-4">
            <Star
              className="absolute inset-0 size-4 text-primary/25"
              aria-hidden
            />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: fill + "%" }}
              aria-hidden
            >
              <Star className="size-4 fill-current text-primary" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  onPrevious,
  onNext,
  showNavigation = false,
}: {
  testimonial: Testimonial;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation?: boolean;
}) {
  return (
    <article className="relative flex min-h-64 flex-col rounded-lg bg-secondary p-6">
      <Rating value={testimonial.rating} />

      <Text className="mt-6 max-w-sm text-lg leading-7">
        {testimonial.body}
      </Text>

      <div className="mt-auto flex items-center gap-3 pt-8">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          aria-hidden
        >
          {testimonial.initials}
        </div>
        <p className="font-semibold">{testimonial.name}</p>
      </div>

      {showNavigation && (
        <>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Previous testimonial"
            onClick={onPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <ArrowLeft aria-hidden />
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Next testimonial"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <ArrowRight aria-hidden />
          </Button>
        </>
      )}
    </article>
  );
}

export function Testimonialls() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Section>
      <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-3 lg:gap-6">
        <div>
          <Heading variant="eyebrow">our guests love us</Heading>
          <Heading variant="section">what people say</Heading>
        </div>

        <div className="overflow-hidden lg:hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: "translateX(-" + activeIndex * 100 + "%)" }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <TestimonialCard
                  testimonial={testimonial}
                  onPrevious={goToPrevious}
                  onNext={goToNext}
                  showNavigation
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
                  className={
                    "size-2 rounded-full " +
                    (activeIndex === index ? "bg-primary" : "bg-primary/30")
                  }
                />
              </Button>
            ))}
          </div>
        </div>

        {testimonials.slice(0, 2).map((testimonial) => (
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
