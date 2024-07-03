/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        smallLaptop: "760px",

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        notes: "repeat(auto-fit, minmax(250px, 1fr))",

        // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};
