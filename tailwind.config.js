/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14223d',
        'ink-2': '#1f2f4a',
        slate: '#e6eef6',
        mist: '#f5f8fb',
        cloud: '#ffffff',
        leaf: '#4bbf8a',
        sky: '#7ac7e6',
        glow: '#d9f1ff',
        ember: '#f28c28',
      },
      fontFamily: {
        sans: ['"Sora"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(20, 34, 61, 0.08)',
        card: '0 18px 40px rgba(20, 34, 61, 0.12)',
      },
      backgroundImage: {
        halo: 'radial-gradient(circle at 20% 20%, rgba(122, 199, 230, 0.28), transparent 45%)',
        bloom: 'radial-gradient(circle at 80% 10%, rgba(75, 191, 138, 0.22), transparent 48%)',
        pulse: 'radial-gradient(circle at 50% 100%, rgba(242, 140, 40, 0.15), transparent 50%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
