import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueMuuri from "vue-muuri";
import "vue-muuri/dist/vue-muuri.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueMuuri);

library.add(fas);
library.add(far);
Vue.component("icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
