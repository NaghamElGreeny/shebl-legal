/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryNav: "#091C2F",
        sharedFont: "#ffffff",
        primaryFont: "#000000",
        darkFont: "#ffffff",
        SharedFontSub: "#b8b8b8",
        primaryBg: "f2f4f5",
        darkBg: "#001c34",
        primaryCard: "#fcfaf8",
        darkCard: "#1a3348",
        primaryIcon: "ffffff",
        darkIcon: "#33495d",
        MainColor: "#cc966a",
        overlay: "#001c34ec",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
