import { ProductCard } from "@/components/blocks/product-card";
import { Heading } from "@/components/ui/heading";
import type { ProductCategories, ProductType } from "@/features/menu/data";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { useInView } from "react-intersection-observer";

type CategorySectionProps = {
  category: ProductCategories;
  translations: Dictionary["menu"];
  locale: Locale;
  onInView: (category: ProductType) => void;
};

export function CategorySection({
  category,
  translations,
  locale,
  onInView,
}: CategorySectionProps) {
  const { ref } = useInView({
    threshold: 0,
    rootMargin: "-45% 0px -45% 0px",
    onChange: (inView) => {
      if (inView) {
        onInView(category.id);
      }
    },
  });

  return (
    <section id={category.id} ref={ref} className="scroll-mt-32">
      <Heading variant="block" className="py-2">
        {translations.categories[category.id]}
      </Heading>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {category.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            translation={translations.products[product.id]}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
