import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4A6FD4',
        danger: '#E8524A',
        warning: '#D4820A',
        nature: '#2EA84A',
        aquatic: '#4A6FD4',
        insect: '#D4820A',
        plant: '#2EA84A',
      },
    },
  },
  plugins: [],
} satisfies Config
