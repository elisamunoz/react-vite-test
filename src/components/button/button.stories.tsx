import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { BUTTON_SIZES } from './button.types'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: BUTTON_SIZES
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};