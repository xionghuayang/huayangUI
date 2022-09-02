/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-31 15:11:50
 * @LastEditTime: 2022-09-02 11:18:59
 * @FilePath: \huayang_ui\docs\.vitepress\config.ts
 */
import { demoBlockPlugin } from "vitepress-theme-demoblock";
const sidebar = {
  "/": [
    { text: "快速开始", link: "/", children: [] },
    {
      text: "通用",
      children: [{ text: "Button 按钮", link: "/components/button/" }],
    },
    { text: "导航" , children: [] },
    { text: "反馈" , children: [] },
    { text: "数据录入" , children: [] },
    { text: "数据展示" , children: [] },
    { text: "布局" , children: [] },
  ],
};
const config = {
  base: process.argv[4] ? '/ui-docs' : '/',
  title: "🔨  Huayang-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 添加DemoBlock插槽
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
