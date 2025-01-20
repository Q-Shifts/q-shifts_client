/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#eef1ff",
          "light-hover": "#e5e6ff",
          "light-active": "#cacdff",
          normal: "#5359ff",
          "normal-hover": "#4b50e6",
          "normal-active": "#4247cc",
          dark: "#3a43bf",
          "dark-hover": "#323599",
          "dark-active": "#252873",
          darker: "#1d1f59"
        },
        gray: {
          light: "#fafafa",
          "light-hover": "#f7fafc",
          "light-active": "#edf2f7",
          normal: "#e2e8f0",
          "normal-hover": "#cbd5e0",
          "normal-active": "#a0aec0",
          dark: "#718096",
          "dark-hover": "#4a5568",
          "dark-active": "#27303f",
          darker: "#1a202c"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      fontSize: {
        39: ["39px", { lineHeight: "auto" }],
        31: ["31px", { lineHeight: "auto" }],
        25: ["25px", { lineHeight: "auto" }],
        20: ["20px", { lineHeight: "auto" }],
        16: ["16px", { lineHeight: "auto" }],
        13: ["13px", { lineHeight: "auto" }],
        10: ["10px", { lineHeight: "auto" }]
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      }
    }
  },
  plugins: []
};
