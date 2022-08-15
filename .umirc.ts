import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  clientLoader: {},
  npmClient: "pnpm",
  tailwindcss: {},
  theme: {
    "primary-color": "#BB86FC",
  },
  define: {
    'process.env': {
      BASE_URL: 'http://8.130.176.233:3000/',
    }
  },
});
