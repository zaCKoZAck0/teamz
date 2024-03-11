import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: 
     { 'lavender_(web)': { DEFAULT: '#E8EBFC', 100: '#0b1656', 200: '#162dac', 300: '#3d56e6', 400: '#93a1f1', 500: '#e8ebfc', 600: '#edeffd', 700: '#f1f3fd', 800: '#f6f7fe', 900: '#fafbfe' }, 'black': { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 'anti-flash_white': { DEFAULT: '#F2F6F9', 100: '#1f3343', 200: '#3e6786', 300: '#6b98bb', 400: '#aec7da', 500: '#f2f6f9', 600: '#f4f7fa', 700: '#f7f9fb', 800: '#f9fbfc', 900: '#fcfdfe' }, 'savoy_blue': { DEFAULT: '#5A5EC1', 100: '#0f1029', 200: '#1f2151', 300: '#2e317a', 400: '#3e41a3', 500: '#5a5ec1', 600: '#7a7dcd', 700: '#9b9dd9', 800: '#bcbee6', 900: '#dedef2' }, 'alice_blue': { DEFAULT: '#E5ECF2', 100: '#1f303e', 200: '#3f607d', 300: '#678fb2', 400: '#a5bdd2', 500: '#e5ecf2', 600: '#e9eff4', 700: '#eff3f7', 800: '#f4f7fa', 900: '#fafbfc' } } 
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
