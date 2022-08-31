/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:37:40
 * @LastEditTime: 2022-08-30 16:39:59
 * @FilePath: \huayang_ui\src\entry.ts
 */
import { App } from "vue";
import hButton from "./button";
import sfcButton from "./button/sfcbtn.vue";
import jsxButton from "./button/jsxButton";

export { hButton, sfcButton, jsxButton };

export default {
	install(app: App): void {
		app.component(hButton.name, hButton);
		app.component(sfcButton.name, sfcButton);
		app.component(jsxButton.name, jsxButton);
	}
};
