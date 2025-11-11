// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2E8B57", // Deep emerald green
//         secondary: "#F4EBD0", // Soft sand beige
//         accent: "#C66E4E", // Warm terracotta
//         dark: "#2C2C2C", // Charcoal black
//         light: "#FAFAF9", // Off-white
//         grayish: "#6B7280", // Neutral text gray
//       },
//       fontFamily: {
//         heading: ["Playfair Display", "serif"], // Elegant serif for titles
//         body: ["Inter", "sans-serif"], // Clean sans-serif for readability
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "2rem",
//           lg: "4rem",
//           xl: "5rem",
//           "2xl": "6rem",
//         },
//       },
//       boxShadow: {
//         soft: "0 4px 10px rgba(0, 0, 0, 0.05)",
//         elegant: "0 6px 20px rgba(0, 0, 0, 0.1)",
//       },
//       transitionTimingFunction: {
//         'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
//         'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
//       },
//       keyframes: {
//         fadeInUp: {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         fadeInUp: "fadeInUp 1s ease-out both",
//       },
//     },
//   },
//   plugins: [],
// };
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B6043",   // 🌿 Elegant olive green
        secondary: "#F3F1ED", // 🌾 Light beige (for calm background sections)
        accent: "#A17C5B",    // 🪵 Soft brown-gold accent
        dark: "#1E1E1E",      // 🌑 Deep gray-black (main background)
        light: "#FAFAFA",     // ☁️ Near white (for text or highlights)
        grayish: "#B5B5B5",   // 🪶 Light gray for readable text on dark bg
        gold: "#f5c518",      // ✨ Sharper luxury gold for headings/text
      },
      fontFamily: {
        heading: ["Lato", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
