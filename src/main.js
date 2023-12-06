import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "ant-design-vue/dist/antd.css";

import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;
Vue.use(ElementUI);

registerMicroApps([
  {
    name: "formDesigner",
    // entry: "//localhost:3000/",
    entry: "http://192.100.8.20:9000/",
    container: "#react-app",
    activeRule: "/formDesigner",
    props: {},
  },
]);

start({
  prefetch: true,
  async fetch(url, ...args) {
    if (url === "http://192.100.8.20:9000/") {
      return window.fetch(url, {
        ...args,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return window.fetch(url, ...args);
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
