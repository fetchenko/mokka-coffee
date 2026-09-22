import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { Text } from "@/components/ui/text";
import { Testimonial } from "@/features/menu/testimonials";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TestimonialCard({
  testimonial,
  onPrevious,
  onNext,
  showNavigation = false,
  showPrevious = true,
  showNext = true,
}: {
  testimonial: Testimonial;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation?: boolean;
  showPrevious?: boolean;
  showNext?: boolean;
}) {
  return (
    <article className="bg-secondary relative flex min-h-64 flex-col rounded-lg p-6">
      <div className="flex items-center justify-between">
        <Rating value={testimonial.rating} />

        {showNavigation && (
          <div className="flex gap-2">
            {showPrevious && (
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Previous testimonial"
                onClick={onPrevious}
              >
                <ArrowLeft aria-hidden />
              </Button>
            )}

            {showNext && (
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Next testimonial"
                onClick={onNext}
              >
                <ArrowRight aria-hidden />
              </Button>
            )}
          </div>
        )}
      </div>

      <Text className="mt-3 max-w-sm text-base leading-6">
        {testimonial.body}
      </Text>

      <div className="mt-auto flex items-center gap-3 pt-6">
        <div
          className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
          aria-hidden
        >
          {testimonial.initials}
        </div>
        <p className="font-semibold">{testimonial.name}</p>
      </div>
    </article>
  );
}
