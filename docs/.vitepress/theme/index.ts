/*
 * @Author: huayang
 * @Description: 
 * @Date: 2022-08-31 15:14:25
 * @LastEditTime: 2022-09-02 09:21:54
 * @FilePath: \huayang_ui\docs\.vitepress\theme\index.ts
 */
import Theme from 'vitepress/dist/client/theme-default/index.js'
import huayangUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
 ...Theme,
 enhanceApp({ app }) {
    app.use(huayangUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}