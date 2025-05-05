/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#f9f5f6',
          100: '#f3eaee',
          200: '#e7d6dc',
          300: '#d7b7c3',
          400: '#c28ea3',
          500: '#ab6d85',
          600: '#94546f',
          700: '#7a3d5a', // Primary wine/burgundy color
          800: '#663650',
          900: '#573147',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};