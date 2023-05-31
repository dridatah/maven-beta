/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "9rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#252525",
        incorpd: "#ED3446",
        infin: "#2684FF",
        cta: "#232323",
        "font-sec": "#BBBBBB",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        incorpd: "url('/images/incorpd-bg.png')",
        infin: "url('/images/infin-bg.png')",
        hero: "url('/images/hero-bg.png')",
        mavenstry: "url('/images/mavenstry-bg.png')",
      },
    },
  },
  plugins: [],
};
