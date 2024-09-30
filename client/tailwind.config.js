/** @type {import('tailwindcss').Config} */
import {createThemes} from "tw-colors";
import colors from "tailwindcss/colors"

const baseColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
];

const shadeMapping = {
  "50":"900",
  "100":"800",
  "200": "700",
  "300":"600",
  "400":"500",
  "500":"400",
  "600":"300",
  "700":"200",
  "800":"100",
  "900":"50"
}

const generateThemeObject  = (colors, mapping , invert =false)=> {
    const theme  ={};
    baseColors.forEach(color=>{
        theme[color] = {};
        Object.entries(mapping).forEach(([key,value])=>{
            const shadeKey = invert?value:key;
            theme[color][key] = colors[color][shadeKey];
        });
    })
    return theme
}

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
    light:{
        ...lightTheme,
        white:'#ffffff'
    },
    dark:{
        ...darkTheme,
        white:colors.gray["950"],
        black: colors.gray["50"]
    }
}

module.exports = {
    darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Next.js 13+ app directory 사용 시
  ],
  theme: {
    extend: {},
  },
  plugins: [createThemes(themes)],
};