import type { Preview } from '@storybook/react'
import { Flowbite } from 'flowbite-react'
import '../src/App.css'

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <Flowbite>
          <Story />
        </Flowbite>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default preview
