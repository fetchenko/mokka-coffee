import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { ArrowRight, Coffee, MapPin } from "lucide-react";
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "outline-inverse"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "View Menu",
    variant: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        View Menu
        <ArrowRight />
      </>
    ),
    variant: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <ArrowRight />,
    "aria-label": "View menu",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="primary">See our menu</Button>
      <Button variant="outline">Outline</Button>
      <div className="bg-surface-inverse p-4">
        <Button variant="outline-inverse">
          <MapPin />
          Visit us
        </Button>
      </div>
      <div className="bg-surface-inverse p-4">
        <Button size="icon" variant="outline-inverse" aria-label="Next">
          <Coffee />
        </Button>
      </div>
    </div>
  ),
};