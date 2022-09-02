/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:37:40
 * @LastEditTime: 2022-09-01 18:34:02
 * @FilePath: \huayang_ui\src\entry.ts
 */
import { App } from "vue";
import { hButton } from "./Button";
import hCard from "./Card/Card.vue";
import "uno.css";
export { hButton, hCard };

export default {
	install(app: App): void {
		app.component(hButton.name, hButton);
		app.component(hCard.name, hCard);
	}
};
