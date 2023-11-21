import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)', ...fontFamily.sans],
      },
      keyframes: {
        moveToRight: {
          from: { paddingRight: '50px' },
          to: { paddingRight: '119px' },
        },
      },
      animation: {
        moveToRight: 'moveToRight 0.3s linear',
      },
      rotate: {
        '110': '110deg',
      },
    },
  },
  plugins: [],
}
export default config
