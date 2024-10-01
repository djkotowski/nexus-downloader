import ThemeContainer from '../src/themes/ThemeContainer'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/App.css'

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeContainer>
          <Story />
        </ThemeContainer>
      )
    },
  ],
  parameters: {
    backgrounds: {
      values: [
        // { name: 'Dark', value: '#111827' },
        { name: 'Dark', value: '#01091A' },
      ],
      default: 'Dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
      theme: themes.dark,
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default preview
