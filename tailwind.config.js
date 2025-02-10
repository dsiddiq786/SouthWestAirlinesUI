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
        arial: ['Arial', 'sans-serif'],
        // arial: ['var(--font-arial)'],
        swSans: ['var(--font-swSans)'],
      },
      colors: {
        'yellow-sw': '#FFBF27',
        'black-sw': '#111c40',
        'blue-sw': '#304CB2',
        'gray-sw': '#636363',
      },
      backgroundImage: {
        'hero-bg': "url('/images/bg-hero.png')",
        'price-unavailable': "url('/images/select-depart/unavailable.png')",
      },
      backgroundPosition: {
        'center-200': 'center 105px',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
