/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-orange-accent",
    "border-orange-normal",
    "text-orange-normal",
    "bg-purple-accent",
    "border-purple-normal",
    "text-purple-normal",
    "bg-blueGray-accent",
    "border-blueGray-normal",
    "text-blueGray-normal",
    "text-gray-dark-active",
    "text-gray-dark",
    "text-micro"
  ],
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
          "light-1": "#F5F7FA",
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
        },
        primary: {
          gray: "#404040",
          green: "#55B65B"
        },
        secondary: {
          gray: "#B1B1B1"
        },
        micro: "#787878",
        accent: {
          gray: "#F0F0F2",
          blue: "#E7EDFF",
          green: "rgba(85, 182, 91, 0.14)"
        },
        orange: {
          accent: "#FFA41C1A",
          normal: "#FFA41C"
        },
        purple: {
          normal: "#9E2DD3",
          accent: "#9E2DD31A"
        },
        blueGray: {
          normal: "#6C6C7F",
          accent: "#6C6C7F1A"
        },
        green: {
          normal: "#24AB28",
          accent: "#EDF7EE"
        },
        deepOrange: {
          normal: "#DF5C34",
          accent: "#F7EEED"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      fontSize: {
        39: ["39px", { lineHeight: "auto" }],
        34: ["34px", { lineHeight: "40px" }],
        31: ["31px", { lineHeight: "auto" }],
        25: ["25px", { lineHeight: "30px" }],
        20: ["20px", { lineHeight: "28px" }],
        16: ["16px", { lineHeight: "24px" }],
        14: ["14px", { lineHeight: "20px" }],
        13: ["13px", { lineHeight: "auto" }],
        12: ["12px", { lineHeight: "16px" }],
        10: ["10px", { lineHeight: "auto" }]
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      borderRadius: {
        xl: "32px",
        lg: "24px",
        md: "16px",
        12: "12px",
        sm: "8px"
      },
      spacing: {
        32: "32px",
        30: "30px",
        24: "24px",
        25: "25px",
        26: "26px",
        18: "18px",
        16: "16px",
        12: "12px",
        10: "10px",
        8: "8px",
        4: "4px"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rounded-tl-lg": {
          "border-top-left-radius": "32px"
        },
        ".rounded-l-16": {
          "border-top-right-radius": "16px",
          "border-bottom-right-radius": "16px"
        }
      });
    }
  ]
};
