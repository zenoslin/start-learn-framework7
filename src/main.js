import "./lib/framework7-2.2.5/dist/css/framework7.min.css";

import Vue from "vue";
import Framework7 from "framework7/dist/framework7.esm.bundle";
import Framework7Vue from "framework7-vue";

import App from "./App.vue";
import store from "./store";
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(Framework7Vue, Framework7);

new Vue({
  store,
  routes,
  framework7: {
    root: "#app",
    id: "io.framework7.testapp"
  },
  render: h => h(App)
}).$mount("#app");
