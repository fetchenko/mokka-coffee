import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from "./header";
import { Logo } from "@/components/ui/logo";
import { dictionary as en } from "@/i18n/dictionaries/en";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const logo = <Logo translations={en.logo} />;

export const Default: Story = {
  args: {
    translations: en.header,
    logo,
  },
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const Dark: Story = {
  args: {
    translations: en.header,
    logo,
  },
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  render: (args) => (
    <div className="h-150 bg-black">
      <Header {...args} className="section-dark" />
    </div>
  ),
};

export const TransparentDesktop: Story = {
  args: {
    translations: en.header,
    logo,
  },
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  render: (args) => (
    <div className="bg-primary h-120">
      <Header {...args} className="section-dark" />
    </div>
  ),
};
