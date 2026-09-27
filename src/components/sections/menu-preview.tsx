"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { CategoryNavigation } from "@/components/blocks/category-navigation";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import type { ProductType } from "@/features/menu/model";
import { ProductRow } from "@/components/blocks/product-row";
import { categoryNavigation } from "@/features/menu/category-menu";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

const DISPLAY_ITEMS = 5;

type MenuPreviewProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

export function MenuPreview({ translations, locale }: MenuPreviewProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductType>("coffee");
  const activeCategory = products.find(
    (category) => category.id === selectedCategory,
  );

  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div>
            <div className="mb-8 space-y-2 md:mb-10">
              <Heading variant="eyebrow">
                {translations.preview.eyebrow}
              </Heading>
              <Heading variant="section">{translations.preview.title}</Heading>
              <Text>{translations.preview.description}</Text>
            </div>

            <CategoryNavigation
              categoryItems={categoryNavigation}
              labels={translations.categories}
              ariaLabel={translations.navigationLabel}
              mode="select"
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div>
            <div className="space-y-8">
              {activeCategory && (
                <div>
                  <Heading variant="eyebrow">
                    {translations.categories[activeCategory.id]}
                  </Heading>
                  <div className="mt-4">
                    {activeCategory.items
                      .slice(0, DISPLAY_ITEMS)
                      .map((product) => (
                        <ProductRow
                          key={product.id}
                          product={product}
                          translation={translations.products[product.id]}
                          locale={locale}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>

            <Button variant="link" asChild className="mt-6">
              <Link href={`${navigation.menu}/#${activeCategory?.id ?? ""}`}>
                {translations.preview.viewFullMenu} <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="bg-secondary relative hidden min-h-56 overflow-hidden rounded-xl md:block md:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1731270605166-edddd1a66918?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={translations.preview.imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
