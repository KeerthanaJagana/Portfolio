/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        // "gray-20": "#ECF0FC", //main bg landing page
        // "gray-50": "#EFE6E6",
        // "gray-100": "#DFCCCC",
        // "gray-500": "#5E0000",
        // "primary-100": "#C6D2F9",
        // "primary-300": "#E3D0FA",
        // "primary-500": "#6540A7",
        // "secondary-400": "#19206E",
        // "secondary-500": "#41166C",

        "gray-20": "#C0D7F2", //main bg landing page
        "gray-50": "#000000",
        "gray-100": "#0F1167", //project box
        "gray-500": "#000000", // main text color
        "primary-100": "#E8E4EA", // navbar
        "primary-300": "#ACA6B0", //input fields 
        "primary-500": "#341043", // get in touch and nav on viewport
        "secondary-400": "#968C9D", // nav links
        "secondary-500": "#4D256D", // button and desc

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        crimsonext: ["Crimson Text", "sans-serif"],
        
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
