/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          purple: "#6C4EF5",
          "deep-purple": "#5B3BF6",
          blue: "#4D8BFF",
          green: "#21C16B",
        },
        // Semantic Colors
        success: "#21C16B",
        warning: "#FFC800",
        streak: "#FF8A00",
        error: "#FF4D4F",
        info: "#4D8BFF",
        // Neutral Colors
        neutral: {
          text: "#0D132B",
          "text-secondary": "#687280",
          border: "#E5E7EB",
          surface: "#F6F7FB",
          bg: "#FFFFFF",
        },
      },
      fontFamily: {
        regular: ["Poppins-Regular"],
        medium: ["Poppins-Medium"],
        semibold: ["Poppins-SemiBold"],
        bold: ["Poppins-Bold"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2" }],
        h2: ["24px", { lineHeight: "1.3" }],
        h3: ["20px", { lineHeight: "1.3" }],
        h4: ["16px", { lineHeight: "1.4" }],
        "body-lg": ["16px", { lineHeight: "1.6" }],
        "body-md": ["14px", { lineHeight: "1.6" }],
        "body-sm": ["13px", { lineHeight: "1.6" }],
        caption: ["11px", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
