/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkHue: "#646cff",
        blueHue: "#377DFF",
        greenHue: "#38CB89",
        orangeHue: "#FFAB00",
        redHue: "#FF5630",
        neutral1: "#FEFEFE",
        neutral2: "#F3F5F7",
        neutral3: "#E8ECEF",
        neutral4: "#6C7275",
        neutral5: "#343839",
        neutral6: "#232627",
        neutral7: "#141718",
      },
      fontFamily: {
        poppins: "poppins",
        inter: "Inter",
        spaceGro: "Space Grotesk",
      },
    },
  },
  plugins: [],
};
