import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //模块化开发必须要use

const router = new VueRouter({
  // mode:'history',//需要serve支持
  routes: [
    { 
      path: "/",
      component:() => import('@/components/home'),
      redirect: '/home',
      children:[
        {path:'/home',component:() => import('@/components/home')}
      ]
    },
    { path: "/echarts", component:() => import('@/components/echarts/echarts')},
    { path: "/echartsDemo", component:() => import('@/components/echarts/echarts-demo')},
    { path: "/sync", component:() => import('@/components/sync用法/sync-father')},
    { path: "/slot", component:() => import('@/components/slot-zyy-father')},
    { path: "/functional", component:() => import('@/components/函数式组件/functionComponent')},
    { path: "/slideBar", component:() => import('@/components/目录树递归组件/side-bar')},
    { path:'/keep-alive', component:() => import('@/components/keep-alive表单demo/index')},
    { path: "/keep-alive2", component:() => import('@/components/keep-alive用法/keep-alive2')},
    {
      path: "/middle", 
      component: () => import('@/components/keep-alive表单demo/middle'),
      children: [
        { path: "", component:() => import('@/components/keep-alive表单demo/page')},
        {path: "/agree", component:() => import('@/components/keep-alive表单demo/agree')},/* 必须在middle下面才能缓存 */
      ]
    },
    { path: "/details", name: 'details',component:() => import('@/components/keep-alive表单demo/details')},
    {
      path: "/list",
      component:() => import('@/components/keep-alive表单demo/listBox'),
      children: [
        { path: "", component:() => import('@/components/keep-alive表单demo/list'), },
      ]
    },
    { path: "/i18n", component:() => import('@/components/vue-i18n') },
    { path: "/father", component:() => import('@/components/$attr $listeners继承用法/father')},
    { path: "/test", component:() => import('@/components/test.vue'),redirect: '/test/aaa',
  children: [
    {
      path: 'aaa',
      component:() => import('@/components/aaa.vue'),
    },
    {
      path: 'bbb',
      component:() => import('@/components/bbb.vue'),
    },
  ]},
    { path: "/gaizao", component:() => import('@/components/gaizao')},
    { path: "/easytable", component:() => import('@/components/vue-easytable')},
    { path: "/checked", component:() => import('@/components/绑定checked值')},
    { path: "/editor", component:() => import('@/components/editor')},
    { path: "/popup", component:() => import('@/components/mint-ui使用/popup')},
    // { path: "/", component: test, meta: { keepAlive: false } }, // 自定义的一个属性,可以自己赋予一个值
    { path: "/editors", component:() => import('@/components/eleEditor')},
  ]
});
console.log(router);
console.log(router.addRoutes([{path:"/goods",component:() => import('@/components/vue-easytable')}]));
console.log(router);



//导出路由
export default router;
