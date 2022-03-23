import { registerMicroApps, start, initGlobalState } from "qiankun";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import microApps from "./micro_app";

window.projectName = "main"; // 为了测试沙盒环境

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

const data = {
  baiduinit: window,
  count: 456
};
// 初始化通信池
const actions = initGlobalState(data);
// 监听通讯池的变化
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
// 启动qiankun
start();
