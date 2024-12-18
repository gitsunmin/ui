import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/Text';
import { typographySize, typographyVariant } from '@/tokens/typography';
import { TYPOGRAPHY_SAMPLE_TEXT } from '@/constants';

const meta = {
  title: 'components/Text',
  component: Text,
  argTypes: {
    variant: {
      options: typographyVariant,
      control: { type: 'inline-radio' },
    },
    size: {
      options: typographySize,
      control: { type: 'number', min: typographySize[0], max: typographySize[typographySize.length - 1] },
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
    variant: 'heading',
    size: 1,
    bold: false,
    children: TYPOGRAPHY_SAMPLE_TEXT,
  },
};