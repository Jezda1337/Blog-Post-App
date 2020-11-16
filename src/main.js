import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //*vueRouter
import "../src/plugins/bootstrap-vue"; //*bootstrapVue

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
