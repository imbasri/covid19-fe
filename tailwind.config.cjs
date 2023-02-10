/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            conta: "./src/assets/img/icon_covid.png",
         },
         colors: {
            primary: "#FF383D",
            secondary: "#035755",
            semiblack: "#4B4F51",
         },
         fontFamily: {
            hat: ["Red Hat Display", "sans-serif"],
         },
      },
   },
   tailwindConfig: "./styles/tailwind.config.js",
   plugins: [require("prettier-plugin-tailwindcss")],
};
