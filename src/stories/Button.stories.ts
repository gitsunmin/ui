import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const index: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};
