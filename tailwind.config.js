/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#2B2C37",
      white: "#fff",
      lightBlue: "#A8A4FF",
      darkBlue: "#635fc7",
      mainBG: "#20212c",
      secondary: "#828fa3",
      shadow: "rgba(54, 78, 126, 0.25)",
      darkBG: "rgba(0, 0, 0, 0.5)",
      formBorder: "rgba(130,143,163,.25)",
      red: "rgb(185 28 28)",
    },
    extend: {
      backgroundImage: {
        arrowUp: "url('/src/assets/icon-chevron-up.svg')",
        newColumn:
          "linear-gradient(180deg,rgba(43,44,55,.25),rgba(43,44,55,.125))",
      },
    },
  },
  plugins: [],
};
