const microApps = [
  {
    name: "micro_vue1",
    entry: "//localhost:8081/",
    activeRule: "/micro_vue1",
    container: "#subapp-viewport", // 子应用挂载的div
    sandbox: { strictStyleIsolation: true },
    props: {
      routerBase: "/micro_vue1", // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    },
  },
  {
    name: "micro_vue2",
    entry: "//localhost:8082/",
    activeRule: "/micro_vue2",
    container: "#subapp-viewport", // 子应用挂载的div
    sandbox: { strictStyleIsolation: true },
    props: {
      routerBase: "/micro_vue2", // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    },
  }
];
export default microApps;
