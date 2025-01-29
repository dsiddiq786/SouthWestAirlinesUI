import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        arial: ['var(--font-arial)'],
        arialTest: ['Arial'],
      },
      colors: {
        'yellow-sw': '#FFBF27',
        'black-sw': '#111c40',
        'blue-sw': '#304CB2',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
