import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from "./header";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  render: () => (
    <div className="h-20 bg-black">
      <Header />
    </div>
  ),
};

export const TransparentDesktop: Story = {
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  render: () => (
    <div className="h-20 bg-coffee-100">
      <Header desktopVariant="transparent" />
    </div>
  ),
};
