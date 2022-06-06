const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
