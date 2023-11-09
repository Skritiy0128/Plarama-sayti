/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'grey-bg': '#f5f5f5',
        'black-222': '#222',
        'black-777': '#777',
        'gold': '#FF9B04',
        'green': '#31C76D',
        'black-2a': '#2A1A01',
      },
      boxShadow:{
        'header-sh': '0px 4px 10px 0px #0000000D',
      }

    },
  },
}