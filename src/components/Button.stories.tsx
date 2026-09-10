import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Order coffee',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn more',
    variant: 'secondary',
  },
};