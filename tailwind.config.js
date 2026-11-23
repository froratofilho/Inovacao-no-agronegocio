/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#062F23',
        forest: '#0B4934',
        tech: '#18A66A',
        vivid: '#3EE58F',
        mint: '#C9F4D8',
        paper: '#F5FAF6',
        graphite: '#17251F',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        mega: ['clamp(2.75rem, 7.4vw, 6.9rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        huge: ['clamp(2.25rem, 5.2vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        big: ['clamp(1.75rem, 3.2vw, 2.9rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      maxWidth: { site: '1320px' },
      transitionTimingFunction: { soft: 'cubic-bezier(.22,.8,.24,1)' },
    },
  },
  plugins: [],
};
