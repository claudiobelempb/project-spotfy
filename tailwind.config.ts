import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#180670',
        'purple-main': '#2D4689',
        'green-main': '#1ED760'
      },
      backgroundImage: {
        'sportify-desktop': "url('./public/images/bursts.svg')",
        'sportify-mobile': "url('./public/images/bursts-mobile.svg')",
      },
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition:{
        'banner-desktop': '46% 4%',
        'banner-mobile': 'top 2% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
};
export default config;
