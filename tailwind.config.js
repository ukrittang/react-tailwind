const sans = [
  '"Baloo 2"',
  "system-ui",
  "-apple-system",
  '"Segoe UI"',
  "Roboto",
  "Ubuntu",
  "Cantarell",
  '"Noto Sans"',
  "sans-serif",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

module.exports = {
  future: {},
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
    options: {
      whitelist: ["bg-color-500"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', ...sans],
      },
    },
  },
  variants: {
    margin: ["responsive", "first", "hover", "focus"],
    padding: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
