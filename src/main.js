import Vue from "vue";
import App from "./App.vue";
import Router from "./router";

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: "#app",
  router: Router, // Router added to the Vue instance
  components: { App },
  template: "<App/>"
});
