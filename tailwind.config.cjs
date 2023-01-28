/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Roboto",
      tertiary: "Aldrich",
      signature: ["Beau Rivage"],
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#f9a931",
      },
      backgroundImage: {
        site: "url('./assets/site-bg3.jpg')",
        about: "url('./assets/about1.png')",
        services: "url('./assets/services2.png')",
        logo: "url('./assets/logo2.png')",
      },
    },
  },
  plugins: [],
};
