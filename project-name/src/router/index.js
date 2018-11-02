import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import HelloWorld from '@/components/HelloWorld' /* 英文HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */

Vue.use(Router) /* 使用路由 */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'HelloWorld', /* 这里的name同上，暂时没发现有什么意思 */
      component: HelloWorld /* 注册HelloWorld组件 */
    }
  ]
})
