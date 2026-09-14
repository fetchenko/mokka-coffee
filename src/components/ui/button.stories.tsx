import type { Meta, StoryObj } from "@storybook/react-vite";

import { ArrowRight, Coffee, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

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
    <div className="flex flex-wrap items-center gap-4">
      {["flex-row", "flex-col w-90 bg-background p-4 section-dark"].map((className) => (
        <div key={className} className={cn("flex w-full gap-2", className)}>
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      ))}
    </div>
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
    <>
      {(["light", "dark"] as const).map((tone) => (
        <Section className="p-4" key={tone} tone={tone}>
          <div className="flex flex-col gap-2">
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
          </div>
        </Section>
      ))}
    </>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["light", "dark"] as const).map((tone) => (
        <Section key={tone} tone={tone}>
          <div className="flex items-center gap-2 p-4">
            <Button size="icon" aria-label="Add item">
              <span aria-hidden="true">+</span>
            </Button>
            <Button size="icon-lg" variant="outline" className="rounded-full" aria-label="Add item">
              <Coffee strokeWidth={1} />
            </Button>
          </div>
        </Section>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
