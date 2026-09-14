import "../src/app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";
import { inter, playfair } from "../src/app/layout";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${playfair.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
