import { appColors } from './src/config/appColors.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: appColors,
    },
  },
  plugins: [],
}
