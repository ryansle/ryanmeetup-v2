import type { Config } from 'tailwindcss';

const fluidType = (minFont: number, maxFont: number) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      brightness: {
        25: '.25',
        30: '.3',
      },
      screens: {
        '1xl': '1360px',
        '3xl': '1800px',
        '4xl': '2100px',
      },
      fontSize: {
        display: fluidType(80, 100),
        display2: fluidType(36, 48),
        display3: fluidType(24, 36),
        display4: fluidType(16, 24),
      },
      fontFamily: {
        cooper: ['Cooper', 'sans-serif']
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
