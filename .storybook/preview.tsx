import "../src/app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";
import { inter, playfair } from "../src/app/fonts";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${playfair.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
