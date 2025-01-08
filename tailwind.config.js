import { TOKEN } from './src/tokens';
import { FOUNDATION } from './src/foundations';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontSize: TOKEN.typography.fontSize,
      fontWeight: TOKEN.typography.fontWeight,
      colors: {
        ...TOKEN.color,
        ...FOUNDATION.color,
      },
      animation: {
        ripple: 'ripple 0.6s ease-out',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
    },
  },

  plugins: [
    function ({ addUtilities, addComponents }) {
      addUtilities({
        '.dark-text-shadow': {
          fontWeight: 100,
          textShadow: `${TOKEN.color.dark.primary} 1px 0 10px`,
        },
        '.light-text-shadow': {
          fontWeight: 100,
          textShadow: `${TOKEN.color.light.primary} 1px 0 10px`,
        },
      });

      addComponents({
        h1: {
          fontSize: TOKEN.typography.fontSize['heading-1'],
        },
        h2: {
          fontSize: TOKEN.typography.fontSize['heading-2'],
        },
        h3: {
          fontSize: TOKEN.typography.fontSize['heading-3'],
        },
        h4: {
          fontSize: TOKEN.typography.fontSize['heading-4'],
        },
        h5: {
          fontSize: TOKEN.typography.fontSize['heading-5'],
        },
        h6: {
          fontSize: TOKEN.typography.fontSize['heading-6'],
        },
      });
    },
  ],
};
