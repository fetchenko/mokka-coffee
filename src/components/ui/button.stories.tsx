import type { Meta, StoryObj } from "@storybook/react-vite";

import { ArrowRight, Coffee, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemePreview } from "@storybook/theme-preview";
import { DirectionPreview } from "@storybook/direction-preview";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <ThemePreview>
      <DirectionPreview>
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </DirectionPreview>
    </ThemePreview>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <ThemePreview>
      <DirectionPreview>
        <Button>
          <span aria-hidden="true">+</span>
          Add item
        </Button>
        <Button>
          <Plus />
          Add item
        </Button>
        <Button variant="link" asChild>
          <a href="#">
            check
            <ArrowRight />
          </a>
        </Button>
      </DirectionPreview>
    </ThemePreview>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <ThemePreview>
      <div className="flex gap-2">
        <Button size="icon" aria-label="Add item">
          <span aria-hidden="true">+</span>
        </Button>
        <Button size="icon-lg" variant="outline" aria-label="Add item">
          <Coffee />
        </Button>
      </div>
    </ThemePreview>
  ),
};


