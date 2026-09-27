import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withTranslations } from "@storybook/with-translations";
import { Header } from "./header";
import { Logo } from "@/components/ui/logo";

const StorybookHeader = withTranslations(Header, "header");
const StorybookLogo = withTranslations(Logo, "logo");

const meta = {
  title: "Components/Header",
  component: StorybookHeader,
} satisfies Meta<typeof StorybookHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const logo = <StorybookLogo />;

export const Default: Story = {
  args: { logo },
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/" } },
  },
};

export const Dark: Story = {
  args: { logo },
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/" } },
  },
  render: (args) => (
    <div className="h-150 bg-black">
      <StorybookHeader {...args} className="section-dark" />
    </div>
  ),
};

export const TransparentDesktop: Story = {
  args: { logo },
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/" } },
  },
  render: (args) => (
    <div className="bg-primary h-120">
      <StorybookHeader {...args} className="section-dark" />
    </div>
  ),
};
