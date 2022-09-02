/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:14:41
 * @LastEditTime: 2022-09-02 11:36:59
 * @FilePath: \huayang_ui\src\button\index.ts
 */
import hButton from "./Button";
import { App } from "vue";
import "uno.css";

export { hButton };
// 导出 Button 组件
export default {
	install(app: App) {
		app.component(hButton.name, hButton);
	}
};
