import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
    extend: {
      colors: {
        'royal-blue': {
          50: '#E6E4FF',
          100: '#D6D4FF',
          200: '#C1BEFF',
          300: '#A09BFF',
          400: '#7872FF',
          500: '#5850FF',
          600: '#2C22FF',
          700: '#2117E9',
          800: '#180FD1',
          900: '#0800B7',
        },
        'dark-indigo': {
          50: '#C7C5DA',
          100: '#A19FC2',
          200: '#7774A3',
          300: '#665F98',
          400: '#584F84',
          500: '#4A3F7B',
          600: '#3D2F72',
          700: '#2B1967',
          800: '#241050',
          900: '#140040',
        },
        azul: {
          50: '#DCE4FF',
          100: '#BBC8F2',
          200: '#A2B5F1',
          300: '#7E99EF',
          400: '#5C7DE8',
          500: '#496DE0',
          600: '#2E5AE5',
          700: '#1B4ADC',
          800: '#073AD9',
          900: '#0031CA',
        },
        dodger: {
          50: '#D7E6FF',
          100: '#BBD2F6',
          200: '#A7C3EF',
          300: '#8FB3ED',
          400: '#75A2EB',
          500: '#5990E9',
          600: '#4282EA',
          700: '#276EE0',
          800: '#1761D9',
          900: '#004FCF',
        },
        cerulean: {
          50: '#DBF7FF',
          100: '#B9EFFF',
          200: '#8FE5FF',
          300: '#65DAFE',
          400: '#44CAF3',
          500: '#0FB9ED',
          600: '#00ADE2',
          700: '#00A0D6',
          800: '#0091C2',
          900: '#0084AC',
        },
        picton: {
          50: '#E8FBFF',
          100: '#D7F7FF',
          200: '#C1F3FF',
          300: '#A9EFFF',
          400: '#96E4F6',
          500: '#87D8EB',
          600: '#6ACEE5',
          700: '#42BFDC',
          800: '#24B1D1',
          900: '#009EC2',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
