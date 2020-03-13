import Vue from "vue";
import VueRouter from "vue-router";

//导入组件
import i18n from "../components/vue-i18n";
import father from "../components/$attr $listeners继承用法/father";
import test from "../components/test.vue";
import gaizao from "../components/gaizao.vue";
import home from "../components/keep-alive用法/home";
import element from "../components/element-ui使用/element";
import element2 from "../components/element-ui使用/element2";
import element3 from "../components/element-ui使用/element3";
import popup from "../components/mint-ui使用/popup.vue";
import easytable from "../components/vue-easytable";
import checked from "@/components/绑定checked值";
import editor from "../components/editor";
import index from "@/components/keep-alive表单demo/index";
import middle from "@/components/keep-alive表单demo/middle";
import page from "@/components/keep-alive表单demo/page";
import agree from "@/components/keep-alive表单demo/agree";
import listBox from "@/components/keep-alive表单demo/listBox";
import list from "@/components/keep-alive表单demo/list";
import details from "@/components/keep-alive表单demo/details";
import slideBar from "@/components/目录树递归组件/side-bar";
import functional from "@/components/函数式组件/functionComponent";
import slot from "@/components/slot-zyy-father";
import sync from "@/components/sync用法/sync-father";
import echarts from "@/components/echarts/echarts";

Vue.use(VueRouter); //模块化开发必须要use

const router = new VueRouter({
  // mode:'history',//需要serve支持
  routes: [
    { path: "/echarts", component: echarts },
    { path: "/sync", component: sync },
    { path: "/slot", component: slot },
    { path: "/functional", component: functional },
    { path: "/slideBar", component: slideBar },
    { path: "/keep-alive", name: "index", component: index },
    {
      path: "/middle",
      name: "middle",
      component: middle,
      children: [
        { path: "/middle", component: page },
        { path: "/agree", name: "agree", component: agree },
      ]
    },
    {
      path: "/list",
      name: "listBox",
      component: listBox,
      children: [
        { path: "/list", name: "list", component: list },
        { path: "/details", name: "details", component: details }
      ]
    },
    { path: "/i18n", component: i18n },
    { path: "/father", component: father },
    { path: "/test", component: test },
    { path: "/gaizao", component: gaizao },
    { path: "/easytable", component: easytable },
    { path: "/checked", component: checked },
    { path: "/editor", component: editor },
    { path: "/home", component: home },
    { path: "/element", component: element },
    { path: "/element2", component: element2 },
    { path: "/element3", component: element3 },
    { path: "/popup", component: popup }
    // { path: "/", component: test, meta: { keepAlive: false } }, // 自定义的一个属性,可以自己赋予一个值
  ]
});

//导出路由
export default router;
