/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aellaBlue: "#2054D2",
        aellaActive: "#1941A4",
        white: "#fff",
        aellaGray: "#F7F8F8",
        aellaSideBar: "#2054D2"
      },
      fontSize: {
        aellaText: "16px",
      },
    },
  },
  plugins: [],
};
