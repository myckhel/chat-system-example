const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
          },
          boxShadow: {
            bottom:
              "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
          },
        },
      },
      plugins: [],
    },
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};
