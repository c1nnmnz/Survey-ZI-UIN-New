/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E8B57',
          light: '#5db485',
          dark: '#1e6e41',
        },
        secondary: {
          DEFAULT: '#1E90FF',
          light: '#5eb1ff',
          dark: '#0062cc',
        },
        success: '#10b981',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.08)',
        button: '0 5px 15px rgba(46, 139, 87, 0.15)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}