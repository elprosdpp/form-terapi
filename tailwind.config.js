/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgform': "url('/src/img/BGForm.jpg')",
        'bgcanvas': "url('/src/img/canvas.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}