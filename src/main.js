import Vue from "vue";
import Framework7 from "./lib/framework7-2.2.5/dist/framework7.esm.bundle.js";
import Framework7Vue from "./lib/framework7-vue-2.2.5/dist/framework7-vue.esm.bundle.js";

import App from "./App.vue";
import store from "./store";
import Routes from "./routes";

Vue.config.productionTip = false;

Vue.use(Framework7Vue, Framework7);

new Vue({
  store,
  framework7: {
    root: "#app",
    routes: Routes
  },
  render: h => h(App)
}).$mount("#app");
