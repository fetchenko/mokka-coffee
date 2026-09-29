import { ProductCard } from "@/components/blocks/product-card";
import { Heading } from "@/components/ui/heading";
import { ProductCategories, ProductType } from "@/features/menu/data";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/dictionaries/en";
import { useInView } from "react-intersection-observer";

type CategorySectionProps = {
  category: ProductCategories;
  translations: Dictionary["menu"];
  locale: Locale;
  registerRef: (element: HTMLElement | null) => void;
  onInView: (category: ProductType) => void;
};

export function CategorySection({
  category,
  translations,
  locale,
  registerRef,
  onInView,
}: CategorySectionProps) {
  const { ref: observerRef } = useInView({
    threshold: 0.6,
    // depends on header height and category navigation height
    rootMargin: `${80 + 52}px`,
    onChange: (inView) => {
      if (inView) {
        onInView(category.id);
      }
    },
  });

  return (
    <section
      ref={(element) => {
        registerRef(element);
        observerRef(element);
      }}
      data-category={category.id}
      className="scroll-mt-32"
    >
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
