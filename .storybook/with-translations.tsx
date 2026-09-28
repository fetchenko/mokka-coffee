import type { ComponentType } from "react";

import type { Dictionary } from "@/i18n/dictionary.types";
import { dictionary as en } from "@/i18n/dictionaries/en";

type TranslatableProps<K extends keyof Dictionary> = {
  dictionary: Dictionary[K];
};

export function withTranslations<
  K extends keyof Dictionary,
  Props extends TranslatableProps<K>,
>(
  Component: ComponentType<Props>,
  section: K,
): ComponentType<Omit<Props, "dictionary">> {
  return function TranslatedComponent(props: Omit<Props, "dictionary">) {
    return <Component {...(props as Props)} dictionary={en[section]} />;
  };
}
