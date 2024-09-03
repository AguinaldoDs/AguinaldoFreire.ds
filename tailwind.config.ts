import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        'default': '1px', // Espessura padrão do sublinhado
        'thick': '2px', // Espessura personalizada
      },
      textDecorationOffset: {
        'default': '0px', // Espaço padrão
        'small': '2px', // Espaço personalizado
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },colors:{
      'potters-clay': {
        '50': '#f8f6ee',
        '100': '#eee9d3',
        '200': '#dfd2a9',
        '300': '#cdb477',
        '400': '#bd9b52',
        '500': '#ae8744',
        '600': '#956c39',
        '700': '#805733',
        '800': '#65442e',
        '900': '#583a2b',
        '950': '#321f16',
    },
    'crowshead': {
        '50': '#f7f6ef',
        '100': '#ebe9d6',
        '200': '#d9d4af',
        '300': '#c3b981',
        '400': '#b1a15e',
        '500': '#a28e50',
        '600': '#8b7443',
        '700': '#705938',
        '800': '#5f4b34',
        '900': '#534130',
        '950': '#1e1610',
    },
    'Personalize1_blue': '#003B4A',
    'Personalize1_pink': '#E66EB2',

    'Personalize2_orange': '#FF8C19',
    'Personalize2_black': '#000000',
    
    'woodsmoke': {
        '50': '#f7f7f8',
        '100': '#eeeef0',
        '200': '#d8d9df',
        '300': '#b6b7c3',
        '400': '#8f91a1',
        '500': '#717286',
        '600': '#5b5d6e',
        '700': '#4a4a5a',
        '800': '#40414c',
        '900': '#383842',
        '950': '#0c0c0e',
    },
    
    
  }
    },
  },
  plugins: [],
};
export default config;
