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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-continuation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite .5s",
        "marquee-continuation": "marquee-continuation 30s linear infinite .25s",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
