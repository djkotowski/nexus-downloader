/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries'
import formPlugin from '@tailwindcss/forms'
import flowbite from 'flowbite-react/tailwind'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#043394',
          50: '#A5C1FC',
          100: '#91B3FC',
          200: '#6998FB',
          300: '#417DFA',
          400: '#1A62F9',
          500: '#064EE3',
          600: '#0540BB',
          700: '#043394',
          800: '#03256C',
          900: '#011235',
          950: '#01091A',
        },
        'brand-green': {
          DEFAULT: '#037050',
          50: '#B7FDE9',
          100: '#A3FDE2',
          200: '#7BFCD6',
          300: '#53FBCA',
          400: '#2BFABD',
          500: '#06F7B0',
          600: '#05CF93',
          700: '#04A777',
          800: '#037050',
          900: '#013929',
          950: '#011E15',
        },
        'brand-yellow': {
          DEFAULT: '#C69013',
          50: '#FDF7EA',
          100: '#FBF0D7',
          200: '#F8E3B2',
          300: '#F4D58D',
          400: '#EFC25A',
          500: '#EAAF27',
          600: '#C69013',
          700: '#926B0E',
          800: '#5F4509',
          900: '#2C2004',
          950: '#130E02',
        },
        'brand-red': {
          DEFAULT: '#8D0801',
          50: '#FFC4C1',
          100: '#FEB1AD',
          200: '#FE8B85',
          300: '#FE645C',
          400: '#FE3E34',
          500: '#FD170B',
          600: '#DE0D02',
          700: '#B60A01',
          800: '#8D0801',
          900: '#550501',
          950: '#390300',
        },
      },
    },
  },
  plugins: [containerQueries, formPlugin, flowbite.plugin()],
}
