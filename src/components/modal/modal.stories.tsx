import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    open: false,
    onCancel: fn()
  },
  argTypes: {
    open: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const OpenModal: Story = {
  args: {
    open: true,
    onCancel: () => console.log('clicked')
  }
};