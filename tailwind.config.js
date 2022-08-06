/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
    },
    extend: {
      fontFamily: {
        'lobster':['"Lobster Two"', 'cursive'],
        'roboto':['"Roboto"', 'sans-serif'],
        'lobster1':['"Lobster"', 'cursive'],
        'poppins':['"Poppins"', 'cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          secondary: "#db2777",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          secondary: "#db2777",
        },
      },
    ]
  },
}
