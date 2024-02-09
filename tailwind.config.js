/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        montserrat: ["var(--font-montserrat)"],
        sans: ["Arial"],
      },
      colors: {
        hsp: {
          orange: "#E47300",
          yellow: "#F2AA03",
          gray: "#393B42",
          blue: "#2E6CC0",
          green: "#639237",
        },
      },
    },
  },
  plugins: [],
};
