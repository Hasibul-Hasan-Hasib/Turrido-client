/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       'main':'#0A1930',
  //       'primary':'#6ED3C6',
  //       'secondary':'#CDD8F6',
  //       'tertiary':'',
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#38BDF8",
          "secondary": "#818CF8",
          "accent": "#F471B5",
          "neutral": "#1E293B",
          "base-100": "#0F172A",
          // "secondary-bg":dark:bg-gray-800,
          "info": "#0CA5E9",
          "success": "#2DD4BF",
          "warning": "#F4BF50",
          "error": "#FB7085",
        },
      },
      "dark",
      "cupcake",
      "night0",
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
}
