import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import InputField from './InputField'

const meta: Meta<typeof InputField> = {
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      )
    },
  ],
  args: {
    label: 'Label',
    onChange: fn(),
  },
  argTypes: {
    label: {
      type: 'string',
    },
  },
  component: InputField,
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {}
