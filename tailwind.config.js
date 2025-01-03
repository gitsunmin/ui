import { typography, typographyWeight } from './src/tokens/typography';
import { colors } from './src/tokens/color';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontSize: typography,
      fontWeight: typographyWeight,
      colors,
    },
  },
  plugins: [],
};
