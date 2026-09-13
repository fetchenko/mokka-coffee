import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';
import { ArrowRight, Coffee, Plus } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {['flex-row', 'flex-col w-90 bg-foreground p-4'].map((className) => (
        <div key={className} className={cn('flex gap-2 w-full', className)}>
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
    <div className='flex flex-col gap-2'>
      <Button>
        <span aria-hidden="true">+</span>
        Add item
      </Button>
      <Button>
        <Plus />
        Add item
      </Button>
      <Button variant="link" asChild>
        <a href='#'>
          check
          <ArrowRight />
        </a>
      </Button>
    </div>

  ),
};

export const IconVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-2'>
      {['bg-background', 'bg-foreground'].map((className) => (
        <div key={className} className={cn('flex items-center gap-2 p-4', className)}>
          <Button size="icon" aria-label="Add item">
            <span aria-hidden="true">+</span>
          </Button>
          <Button size="icon-lg" variant="outline" className='rounded-full' aria-label="Add item">
            <Coffee strokeWidth={1} />
          </Button>
        </div>
      ))}
    </div>

  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};