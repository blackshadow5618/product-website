/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbase1: "#0A0A0A",
        darkbase2: "#121212",
        accentBlue: "#00C6FF",
        accentPink: "#FF1F6A",
        neutralTextLight: "#EDEDED",
        neutralTextMedium: "#CCCCCC",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        sfpro: ["SF Pro", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 15px rgba(0, 198, 255, 0.3)",
      },
      backgroundImage: {
        "gradient-smooth": "linear-gradient(135deg, #00C6FF 0%, #FF1F6A 100%)",
      },
    },
  },
  plugins: [],
};
