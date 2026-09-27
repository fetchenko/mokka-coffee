import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withTranslations } from "../../../.storybook/with-translations";
import { Header } from "./header";

const meta = {
  title: "Components/Header",
  component: Header,
  decorators: [withTranslations("header")],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const logo = (
  <span>
    <span className="block font-sans text-2xl leading-none tracking-[0.12em]">
      MOKKA
    </span>
    <span className="text-muted-foreground mt-1 block text-[0.5rem] tracking-[0.2em] uppercase">
      Specialty Coffee
    </span>
  </span>
);

export const Default: Story = {
  args: {
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
