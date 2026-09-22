import { Star } from "lucide-react";

const MAX_RATE = 5;

export function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex gap-1"
      aria-label={value.toFixed(1) + ` out of ${MAX_RATE} stars`}
    >
      {Array.from({ length: MAX_RATE }).map((_, index) => {
        const fill = Math.min(Math.max(value - index, 0), 1) * 100;

        return (
          <span key={index} className="relative size-4">
            <Star
              className="text-primary/25 absolute inset-0 size-4"
              aria-hidden
            />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: fill + "%" }}
              aria-hidden
            >
              <Star className="text-primary size-4 fill-current" />
            </span>
          </span>
        );
      })}
    </div>
  );
}
