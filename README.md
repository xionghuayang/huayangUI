
<p align="center">
  <a href="https://www.xionghuayang.work/ui-docs/" target="_blank">
    <img src="https://www.xionghuayang.work/img/huayang.png" style="width: 200px;" />
  </a>
</p>
<h1 align="center">huayangUI 组件库</h1>
<hr style='height: 1px' />
<div>
  <p align='center'>
    <a href="https://www.npmjs.com/package/huayang_oto_vite" target="_blank">
      <img src="https://badgen.net/npm/v/huayang_oto_vite" alt="NPM version" style="max-width: 100%;">
    </a>
    <a href="https://github.com/xionghuayang/huayangUI/actions/workflows/main.yml" target="_blank">
      <img alt='CI' src="https://github.com/xionghuayang/huayangUI/actions/workflows/main.yml/badge.svg?branch=master" />
    </a>
    <img src="https://img.shields.io/github/license/xionghuayang/huayangUI" />
  </p>
</div>

## Features

基于vite前端组件库演示项目。
- 基于Vue3框架
- 支持JSX与Vue单文件组件
- Eslint + Prettier + Husky 语法检查
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## 安装
```js
pnpm i huayang_oto_vite
```
## 使用

```vue
import { createApp } from "vue";
import huayangUI from "huayang_oto_vite";
createApp({
	template: `
  <div>
    <hButton icon='search' plain round></hButton>
    <hButton icon='edit' plain round></hButton>
    <hButton icon='check' plain round></hButton>
    <hButton icon='message' plain round></hButton>
    </div>`
})
	.use(huayangUI)
	.mount("#app");

```