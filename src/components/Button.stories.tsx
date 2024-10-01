import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    disabled: false,
    isProcessing: false,
    size: 'md',
    onClick: fn(),
  },
  argTypes: {
    className: {
      control: false,
      type: 'string',
      description: 'Additional classes to apply to the button',
    },
    disabled: {
      type: 'boolean',
    },
    kind: {
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'warning', 'danger'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    isProcessing: {
      type: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      type: 'string',
    },
    type: {
      control: false,
      options: ['button', 'submit', 'reset'],
      table: {
        defaultValue: { summary: "'button'" },
        type: { summary: "'button' | 'submit' | 'reset'" },
      },
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    kind: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    kind: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    kind: 'secondary',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    kind: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    kind: 'danger',
  },
}
