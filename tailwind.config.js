/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        dark: {
          900: "rgba(11,4,52,1)",
        },

        primary: {
          900: "rgba(120, 72, 244, 1)",
          800: "rgba(120, 72, 244, 0.8)",
          700: "rgba(120, 72, 244, 0.7)",
          600: "rgba(120, 72, 244, 0.6)",
          500: "rgba(120, 72, 244, 0.5)",
          400: "rgba(120, 72, 244, 0.4)",
          300: "rgba(120, 72, 244, 0.3)",
          200: "rgba(120, 72, 244, 0.2)",
          100: "rgba(120, 72, 244, 0.1)",
          hover: "rgb(90, 47, 201, 1)",
        },

        gray: {
          900: "rgba(40,46,54,1)",
          800: "rgba(40,46,54,0.8)",
          700: "rgba(40,46,54,0.7)",
          600: "rgba(40,46,54,0.6)",
          500: "rgba(40,46,54,0.5)",
        },
      },
    },
  },
  plugins: [],
};
