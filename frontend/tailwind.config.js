/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        ocean: '#0f766e',
        sunrise: '#f59e0b',
        berry: '#be185d',
        meadow: '#16a34a',
        sky: '#2563eb',
      },
      boxShadow: {
        soft: '0 20px 60px -24px rgba(15, 23, 42, 0.35)',
      },
      animation: {
        zoomIn: 'zoomIn 320ms ease-out',
        zoomOut: 'zoomOut 280ms ease-out',
      },
    },
  },
  plugins: [],
}
