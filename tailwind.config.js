/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nectar-accent-color': 'rgb(0, 79, 81)',
        'nectar-accent-color-hover': 'rgb(0, 124, 128)',
        'nectar-extra-color-1': 'rgb(0, 43, 73)',
        'nectar-extra-color-1-hover': 'rgb(0, 88, 149)',
        'custom-gray': '#ececec'
      },
      backgroundImage: {
        'box-background': "url('/box-background.svg')",
      },
      backgroundSize: {
      '120': '120%',
      }
    }
  },
  plugins: [],
}
