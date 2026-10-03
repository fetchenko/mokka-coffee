import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils/cn";

const MAP_URL =
  "https://www.google.com/maps?q=ul.+Kawiorniarna+12%2C+31-123+Krakow%2C+Poland&output=embed";

export function MapEmbed({
  translations,
  stretch = false,
}: {
  translations: Dictionary["visitUs"];
  stretch?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        stretch ? "h-full min-h-72" : "aspect-[4/3] lg:aspect-[16/9]",
      )}
    >
      <iframe
        title={translations.mapTitle}
        src={MAP_URL}
        loading="lazy"
        className="absolute inset-0 size-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
