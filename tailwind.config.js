/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://www.cafonline.org/images/default-source/blogs/collaboration-partner-hands-600px.jpg?sfvrsn=24548d40_0')",
      },
    },
  },
  plugins: [],
};
