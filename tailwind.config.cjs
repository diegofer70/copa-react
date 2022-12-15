/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    fontSize: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 40,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
        900: '#1F1E1E',
        300: '#3c3939',
        100: '#F4F4F4',
      },

      magenta: {
        900: '#8D1B3D',
        50: '#FFF2F6',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      backgroundImage: {
        hero: "url('./src/assets/images/wallpapers/wallpaper.png')",
      },
    },
  },
  plugins: [],
};
