import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { Text } from "@/components/ui/text";
import { Testimonial } from "@/features/menu/testimonials";
import { Dictionary } from "@/i18n/dictionaries/en";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

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
      <div className={cn(showNavigation && "px-12")}>
        <Rating value={testimonial.rating} />
      </div>

      {showNavigation && (
        <>
          {showPrevious && (
            <Button
              type="button"
              variant="ghost"
              size="icon-md"
              aria-label={translations.previousLabel}
              onClick={onPrevious}
              className="text-primary/60 hover:text-primary absolute top-1/2 left-1 -translate-y-1/2 hover:bg-transparent"
            >
              <ChevronLeft aria-hidden />
            </Button>
          )}

          {showNext && (
            <Button
              type="button"
              variant="ghost"
              size="icon-md"
              aria-label={translations.nextLabel}
              onClick={onNext}
              className="text-primary/60 hover:text-primary absolute top-1/2 right-1 -translate-y-1/2 hover:bg-transparent"
            >
              <ChevronRight aria-hidden />
            </Button>
          )}
        </>
      )}

      <Text
        className={cn(
          "mt-3 max-w-sm text-base leading-6",
          showNavigation && "px-12",
        )}
      >
        {translations.items[testimonial.bodyKey]}
      </Text>

      <div
        className={cn(
          "mt-auto flex items-center gap-3 pt-5",
          showNavigation && "px-12",
        )}
      >
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
