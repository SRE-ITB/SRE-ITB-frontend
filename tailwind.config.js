module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        semiWhite: '#F0F1F4',
        black: '#000000',
        semiBlack: '#1F1F21',
        green0: '#0D664C',
        green1: '#046669',
        green111: '#ACC4C0',
        green2: '#046E6C',
        green3: '#0B7D73',
        green4: '#1C907C',
        green5: '#2C9A7F',
        green6: '#3EA683',
        green7: '#5DB489',
        green8: '#89C190',
        green9: '#70B69B',
        green10: '#43A3A2',
        green11: '#346E3C',
        blue1: '#E3F7F6',
        blue2: '#AAF4EE',
        blue3: '#559BA0',
        blue4: '#004353',
        blue5: '#132D48',
        blue6: '#172A3A'
      },
      fontFamily: {
        merich: ['Merich', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        varela: ['Varela-Round', 'sans-serif'],
        helvatica: ['Helvatica', 'sans-serif']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '2.5xl': '1.653rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      },
      dropShadow: {
        green: '0 2px 4px rgba(137, 193, 144, 0.25)'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
