import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Ellipsis } from './ellipsis'

export default {
  title: 'Components/Ellipsis',
  component: Ellipsis,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Ellipsis>;

const Template: ComponentStory<typeof Ellipsis> = ({
  ...args
}) => <Ellipsis {...args} />

export const Default = Template.bind({})
