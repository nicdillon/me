import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-font-color)',
        secondary: 'var(--secondary-font-color)',
        link: 'var(--link-color)',
        'link-hover': 'var(--link-hover-color)',
        accent: 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--primary-font-color)',
            a: {
              color: 'var(--link-color)',
              '&:hover': {
                color: 'var(--link-hover-color)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}