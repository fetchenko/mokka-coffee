import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, waitFor, within } from "storybook/test";

import { Menu } from "./menu";
import { dictionary } from "@/i18n/dictionaries/en";

const meta = {
  title: "Sections/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    translations: dictionary.menu,
    locale: "en",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const links = canvas.getAllByRole("link");
    expect(links).toHaveLength(4);

    for (const category of ["coffee", "non-coffee", "pastries", "sandwiches"]) {
      expect(
        canvas.getByRole("heading", {
          name:
            dictionary.menu.categories[
              category as keyof typeof dictionary.menu.categories
            ],
        }),
      ).toBeVisible();
    }

    const coffeeLink = canvas.getByRole("link", {
      name: dictionary.menu.categories.coffee,
    });
    const pastriesLink = canvas.getByRole("link", {
      name: dictionary.menu.categories.pastries,
    });
    const pastriesSection = canvasElement.querySelector("#pastries");

    expect(coffeeLink).toHaveAttribute("aria-current", "location");
    expect(pastriesSection).not.toBeNull();

    pastriesSection?.scrollIntoView({
      block: "center",
      behavior: "instant",
    });

    await waitFor(() => {
      expect(pastriesLink).toHaveAttribute("aria-current", "location");
    });

    expect(coffeeLink).not.toHaveAttribute("aria-current", "location");

    await pastriesLink.click();

    expect(window.location.hash).toBe("#pastries");
    expect(
      canvas.getByRole("heading", {
        name: dictionary.menu.categories.pastries,
      }),
    ).toBeVisible();
  },
};
