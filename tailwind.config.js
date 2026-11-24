/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: '#0B4934', // verde escuro (cabeçalho do banner e rodapé)
        destaque: '#18A66A', // verde dos botões e títulos pequenos
        claro: '#F5FAF6', // fundo das seções alternadas
        texto: '#17251F', // cor do texto
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
