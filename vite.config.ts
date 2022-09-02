/*
 * @Author: huayang
 * @Description: 
 * @Date: 2022-08-30 16:25:38
 * @LastEditTime: 2022-09-01 17:42:51
 * @FilePath: \huayang_ui\vite.config.ts
 */
import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    },
    assetFileNames: `assets/[name].css`,
  }
}

export const config = {
  plugins: [vue(), vueJsx(), Unocss(),viteEslint()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: [".mjs", ".js", ".ts", ".vue", ".jsx", ".tsx", ".json"]
  },
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'huayangUI',
      fileName: 'huayang-ui',
      formats: ['es','umd', 'iife'] // , 'cjs'
    },
    outDir: './dist'
  }
}
export default defineConfig(config as UserConfig)