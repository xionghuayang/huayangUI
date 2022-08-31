/*
 * @Author: huayang
 * @Description: 
 * @Date: 2022-08-31 15:08:07
 * @LastEditTime: 2022-08-31 15:08:19
 * @FilePath: \huayang_ui\docs\vite.config.ts
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});