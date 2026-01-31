export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#fef5f0',
          100: '#fce7da',
          200: '#f9d0bb',
          300: '#f5b086',
          400: '#f19054',
          500: '#ed7932',
          600: '#e6622a',
          700: '#da5520',
          800: '#c94218',
          900: '#b32810',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
