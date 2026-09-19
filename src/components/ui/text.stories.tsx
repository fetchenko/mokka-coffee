import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = [
  {
    variant: "body",
    label: "Body",
    text: "Carefully selected beans roasted in small batches.",
  },
  {
    variant: "small",
    label: "Small",
    text: "Available in store and online.",
  },
] as const;

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {["", "section-dark bg-background text-foreground"].map((className) => (
        <div key={className} className={className}>
          <div className="space-y-6">
            {variants.map(({ variant, label, text }) => (
              <div key={variant}>
                <p className="text-muted-foreground mb-2 text-xs">{label}</p>

                <Text variant={variant}>{text}</Text>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
