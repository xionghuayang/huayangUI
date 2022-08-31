/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:11:53
 * @LastEditTime: 2022-08-31 10:46:42
 * @FilePath: \huayang_ui\src\index.ts
 */
import "uno.css";
import { createApp } from "vue";
// import hButton from './button';
// import sfcButton from './button/sfcbtn.vue'
// import jsxButton from './button/jsxButton'
import huayangUI from "./entry";
createApp({
	template: `
  <div>
    <sfcButton />
    <jsxButton icon='search' plain round class='w-13 h-13'></jsxButton>
    <jsxButton icon='edit' plain round></jsxButton>
    <jsxButton icon='check' plain round></jsxButton>
    <jsxButton icon='message' plain round></jsxButton>
    <jsxButton color='green' icon='edit'>成功按钮</jsxButton>
    <jsxButton color='gray' round>成功按钮</jsxButton>
    <jsxButton color='red' round size='small'>成功按钮</jsxButton>
    <jsxButton color='pink' size='large' round>成功按钮</jsxButton>
  </div>`
})
	.use(huayangUI)
	.mount("#app");
