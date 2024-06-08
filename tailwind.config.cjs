module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Incluye todos los archivos donde usas clases de Tailwind CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        'conden': ['Roboto Condensed', 'serif'],
      },
    },
  },
  plugins: [],
};
