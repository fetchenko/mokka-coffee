"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";

const testimonials = [
  {
    body: "the best coffeee in town! cozy place and amazing vibes.",
    name: "Anna K.",
    initials: "AK",
  },
  {
    body: "i come here every morning. and delicious pastries.",
    name: "Magda L.",
    initials: "ML",
  },
  {
    body: "great coffee, friendly service, and a lovely atmosphere.",
    name: "Julia M.",
    initials: "JM",
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  testimonial,
  onNext,
}: {
  testimonial: Testimonial;
  onNext: () => void;
}) {
  return (
    <article className="relative flex min-h-64 flex-col rounded-lg bg-secondary p-6 pr-16">
      <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" aria-hidden />
        ))}
      </div>

      <p className="mt-6 max-w-sm text-lg leading-7">{testimonial.body}</p>

      <div className="mt-auto flex items-center gap-3 pt-8">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          aria-hidden
        >
          {testimonial.initials}
        </div>
        <p className="font-semibold">{testimonial.name}</p>
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        onClick={onNext}
        className="absolute right-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background transition-transform hover:translate-x-0.5 lg:hidden"
      >
        <ArrowRight className="size-5" aria-hidden />
      </button>

      <span
        className="absolute right-5 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background lg:flex"
        aria-hidden
      >
        <ArrowRight className="size-5" />
      </span>
    </article>
  );
}

export function Testimonialls() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
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
                  onNext={goToNext}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={"Show testimonial " + (index + 1)}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className="size-2 rounded-full bg-primary/30 aria-[current=true]:bg-primary"
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <TestimonialCard
            testimonial={testimonials[0]}
            onNext={goToNext}
          />
        </div>

        <div className="hidden lg:block">
          <TestimonialCard
            testimonial={testimonials[1]}
            onNext={goToNext}
          />
        </div>
      </Container>
    </Section>
  );
}
