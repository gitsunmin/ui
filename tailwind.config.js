import { typography, typographyWeight } from './src/tokens/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: typography,
      fontWeight: typographyWeight,
    },
  },
  plugins: [],
};
