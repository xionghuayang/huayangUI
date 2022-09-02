/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-09-01 17:43:20
 * @LastEditTime: 2022-09-02 09:53:57
 * @FilePath: \huayang_ui\src\Card\index.ts
 */
import hCard from "./Card.vue";
import { App } from "vue";
import "uno.css";
export { hCard };
export default {
	install(app: App) {
		app.component(hCard.name, hCard);
	}
};
