import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta = {
  title: "UI/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = [
  {
    variant: "hero",
    label: "Hero heading",
    text: "Freshly roasted coffee",
  },
  {
    variant: "section",
    label: "Section heading",
    text: "Our Coffee",
  },
  {
    variant: "block",
    label: "Block heading",
    text: "Espresso",
  },
  {
    variant: "eyebrow",
    label: "Eyebrow",
    text: "Featured",
  },
] as const;

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {["bg-background", "section-dark bg-background text-foreground"].map((className) => (
        <div key={className} className={className}>
          <div className="space-y-6">
            {variants.map(({ variant, label, text }) => (
              <div key={variant}>
                <p className="text-muted-foreground mb-2 text-xs">{label}</p>

                <Heading variant={variant} as="h2">
                  {text}
                </Heading>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const SemanticLevels: Story = {
  render: () => (
    <div className="space-y-6">
      <Heading as="h1" variant="section">
        H1 — Section
      </Heading>

      <Heading as="h2" variant="section">
        H2 — Section
      </Heading>

      <Heading as="h3" variant="section">
        H3 — Section
      </Heading>

      <Heading as="h4" variant="section">
        H4 — Section
      </Heading>
    </div>
  ),
};
