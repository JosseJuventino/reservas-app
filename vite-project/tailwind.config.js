/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'landingImage': "url('/src/assets/images/cupcakes.jpg')",
      },
      colors: {
        pink: "#FCD5CE",
      },
    },

  },
  plugins: [],
};