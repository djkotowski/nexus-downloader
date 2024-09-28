import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Toggle from './Toggle'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  args: {
    onChange: fn(),
  },
  argTypes: {
    defaultValue: {
      control: false,
      description: 'The initial value of the toggle (for uncontrolled inputs)',
    },
    value: {
      control: false,
      description: 'The value of the toggle (for controlled inputs)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {}
