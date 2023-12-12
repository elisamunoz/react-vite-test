import type { StoryObj } from '@storybook/react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Button',
    onClick: () => console.log("clicked")
  }
};
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
    onClick: () => console.log("clicked")
  }
};

export const WithIcon: Story = {
  args: {
    primary: true,
    children: 'Button',
    icon: faEnvelope,
    onClick: () => console.log("clicked")
  }
};