import { Footer } from "@/components/layout/footer";
import { Logo } from "@/components/ui/logo";
import { dictionary as en } from "@/i18n/dictionaries/en";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    translations: en.footer,
    languageTranslations: en.language,
    logoTranslations: en.logo,
    locale: "en",
  },
  parameters: {
    layout: "fullscreen",
  },
};
