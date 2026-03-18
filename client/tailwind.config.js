/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        dark: "#2C1810",
        cream: "#FAF7F2"
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Raleway", "Lato", "sans-serif"]
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #C9A84C" },
          "50%": { boxShadow: "0 0 30px #C9A84C" }
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        bounceSoft: "bounceSoft 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      }
    }
  },
  plugins: []
};
