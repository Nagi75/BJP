/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'baddie-pink': '#ec4899',
        'baddie-purple': '#a855f7',
        'baddie-magenta': '#d946ef',
        'bhabhi-orange': '#f97316',
        'bhabhi-yellow': '#facc15',
        'bhabhi-amber': '#f59e0b',
        'neon-cyan': '#06b6d4',
        'neon-green': '#10b981',
        'neon-red': '#ef4444',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
};
