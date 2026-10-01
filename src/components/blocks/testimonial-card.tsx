import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { Text } from "@/components/ui/text";
import { Testimonial } from "@/features/menu/testimonials";
import { Dictionary } from "@/i18n/dictionaries/en";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TestimonialCard({
  translations,
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
  translations: Dictionary["testimonials"];
}) {
  return (
    <article className="bg-secondary relative flex min-h-56 flex-col rounded-lg p-6">
      <div className={showNavigation ? "px-12" : undefined}>
        <Rating value={testimonial.rating} />
      </div>

      {showNavigation && (
        <>
          {showPrevious && (
            <Button
              type="button"
              variant="secondary"
              size="icon-lg"
              aria-label={translations.previousLabel}
              onClick={onPrevious}
              className="absolute top-1/2 left-2 -translate-y-1/2"
            >
              <ArrowLeft aria-hidden />
            </Button>
          )}

          {showNext && (
            <Button
              type="button"
              variant="secondary"
              size="icon-lg"
              aria-label={translations.nextLabel}
              onClick={onNext}
              className="absolute top-1/2 right-2 -translate-y-1/2"
            >
              <ArrowRight aria-hidden />
            </Button>
          )}
        </>
      )}

      <Text className={showNavigation ? "mt-3 max-w-sm px-12 text-base leading-6" : "mt-3 max-w-sm text-base leading-6"}>
        {translations.items[testimonial.bodyKey]}
      </Text>

      <div className={showNavigation ? "mt-5 flex items-center gap-3 px-12" : "mt-5 flex items-center gap-3"}>
        <div
          className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
          aria-hidden
        >
          {translations.items[testimonial.initialsKey]}
        </div>
        <p className="font-semibold">
          {translations.items[testimonial.nameKey]}
        </p>
      </div>
    </article>
  );
}
