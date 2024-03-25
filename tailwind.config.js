/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.html", "./src/**/*.{js,css}"];
export const theme = {
  extend: {
    colors: {
      primary: {
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkmoderatecyan: "hsl(168, 34%, 41%)",

      },
      neutral: {
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue:"hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
        whileOpacity50: "rgba(255,255,255,0.4)"
      }
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      fraunces : ["Fraunces", "serif"],
    },
  },
};
export const plugins = [];

