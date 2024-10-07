import type { ReactNode } from 'react'
import { theme as baseTheme, Flowbite, type CustomFlowbiteTheme } from 'flowbite-react'
import { twMerge } from 'tailwind-merge'

import ThemeInit from '~/themes/ThemeInit'

const theme: CustomFlowbiteTheme = {
  button: {
    base: twMerge(baseTheme.button.base, 'focus:ring-4 font-medium'),
    color: {
      default:
        'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400 active:hover:bg-gray-500 disabled:bg-gray-800 disabled:active:hover:bg-gray-800 disabled:text-gray-400',
      primary:
        'bg-brand-blue-500 text-white hover:bg-brand-blue-600 focus:ring-brand-blue-600 active:hover:bg-brand-blue-800 disabled:bg-brand-blue-300 disabled:active:hover:bg-brand-blue-300',
      secondary:
        'bg-brand-green text-white hover:bg-brand-green-900 focus:ring-brand-green-700 active:hover:bg-brand-green-950 disabled:bg-green-300 disabled:active:hover:bg-green-300',
      warning:
        'bg-brand-yellow text-white hover:bg-brand-yellow-700 focus:ring-brand-yellow-500 active:hover:bg-brand-yellow-800 disabled:bg-brand-yellow-300 disabled:active:hover:bg-brand-yellow-300',
      danger:
        'bg-brand-red text-white hover:bg-brand-red-900 focus:ring-brand-red-700 active:hover:bg-brand-red-950 disabled:bg-brand-red-300 disabled:active:hover:bg-brand-red-300',
    },
    inner: {
      isProcessingPadding: {
        xs: 'pl-6',
        sm: 'pl-9',
        md: 'pl-10',
        lg: 'pl-14',
        xl: 'pl-16',
      },
    },
  },
  floatingLabel: {
    input: {},
  },
  spinner: {
    color: {
      default: 'fill-gray-600',
      danger: 'fill-brand-red-600',
      primary: 'fill-brand-blue-300',
      secondary: 'fill-brand-green-600',
      warning: 'fill-brand-yellow-700',
    },
  },
}

export default function ThemeContainer({ children }: { children?: ReactNode }) {
  return (
    <Flowbite theme={{ mode: 'dark', theme }}>
      <ThemeInit />
      {children}
    </Flowbite>
  )
}
