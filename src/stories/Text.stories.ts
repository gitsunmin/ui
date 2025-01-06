import type { Meta, StoryObj } from '@storybook/react';

import Text from '@/components/Text';
import { typography } from '@/tokens/typography';
import { TYPOGRAPHY_SAMPLE_TEXT } from '@/constants';

const meta = {
  title: 'components/Text',
  component: Text,
  argTypes: {
    token: {
      options: Object.keys(typography),
      control: { type: 'select' },
    },
    variant: {
      options: ['normal', 'bold', 'bright'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    token: 'heading-1',
    variant: 'normal',
    children: TYPOGRAPHY_SAMPLE_TEXT,
  },
};