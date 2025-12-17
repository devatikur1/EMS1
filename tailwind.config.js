/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base Theme Colors
        bg: "#09090b", // Deep black base background
        surface: "#0f0f12", // Surface for cards or section
        accent: "#3b82f6", // Highlight or accent color
        accentA: "#27272a", // Highlight or accent color
        text: "#fafafa", // Main text color
        subtext: "#eeeeee", // Muted text color
        smtext: "#9f9fa9", // Muted text color
        border: "#212123", // Divider color
        hover: "#27272a", // Hover state

        // Status subtle variants
        success: "#4caf50",
        warning: "#ffb300",
        error: "#e53935",
      },
    },
  },
  plugins: [],
};
