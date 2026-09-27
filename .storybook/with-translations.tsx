import type { Decorator } from "@storybook/react-vite";

import type { Dictionary } from "../src/i18n/dictionaries/en";
import { dictionary as en } from "../src/i18n/dictionaries/en";

export function withTranslations<K extends keyof Dictionary>(
  section: K,
): Decorator {
  return (Story, context) => (
    <Story
      {...context.args}
      dictionary={en[section]}
    />
  );
}
