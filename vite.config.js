import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  const path = require('path')


  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  }

});
