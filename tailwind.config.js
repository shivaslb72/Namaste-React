/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,}",  //Tailwind CSS should scan for classes.
  ],
  theme: {
    extend: {},   //overriding the default theme provided by Tailwind CSS.
  },
  plugins: [],   //These plugins can add new utility classes, custom variants
}

