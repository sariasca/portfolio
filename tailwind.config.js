/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [       // HTML base de Vite
    "./src/**/*.{js,ts,jsx,tsx}",  // Todos tus componentes y páginas
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
      },
    },
  },
  plugins: [],
}