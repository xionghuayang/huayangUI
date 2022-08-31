/*
 * @Author: huayang
 * @Description: 
 * @Date: 2022-08-30 16:29:57
 * @LastEditTime: 2022-08-30 16:30:04
 * @FilePath: \huayang_ui\shims-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}