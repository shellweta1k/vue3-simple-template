import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { resolve } from 'path';
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('src/assets/icon/svg')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: 'svg-icon',
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.tsx'],
    alias: {
      '@': pathResolve('src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
