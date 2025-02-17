/clip2img/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            h1: {
              marginTop: '1.5em',
            },
            h2: {
              marginTop: '1.2em',
            },
            'ol > li': {
              paddingLeft: '0.5em',
            },
            'ul > li': {
              paddingLeft: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}