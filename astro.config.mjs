import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nicdillon.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.githubusercontent.com"
      }
    ]
  },
  integrations: [tailwind(), icon()]
});
