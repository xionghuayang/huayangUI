/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:11:53
 * @LastEditTime: 2022-09-01 17:48:40
 * @FilePath: \huayang_ui\src\index.ts
 */

import { createApp } from "vue";
import huayangUI from "./entry";
createApp({
	template: `
  <div>
    <hButton icon='search' plain round class='w-13 h-13'></hButton>
    <hButton icon='edit' plain round></hButton>
    <hButton icon='check' plain round></hButton>
    <hButton icon='message' plain round></hButton>
    <hButton color='green' icon='edit'>成功按钮</hButton>
    <hButton color='gray' round>成功按钮</hButton>
    <hButton color='red' round size='small'>成功按钮</hButton>
    <hButton color='pink' size='large' round>成功按钮</hButton>
    <hCard />
    </div>`
})
	.use(huayangUI)
	.mount("#app");
