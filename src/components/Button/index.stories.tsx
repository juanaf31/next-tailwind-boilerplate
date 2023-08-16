import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    disabled: false,
    children: 'Press Me',
  },
}

export const Secondary = {
  args: {
    color: 'secondary',
    variant: 'contained',
    disabled: false,
    children: 'Press Me',
  },
}

export const Outlined = {
  args: {
    color: 'primary',
    variant: 'outlined',
    children: 'Press Me',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: 'Press Me',
  },
}
