import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //*vueRouter
import "../src/plugins/bootstrap-vue"; //*bootstrapVue
import store from "./store/index"; //* VUEX

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
