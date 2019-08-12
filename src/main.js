import Vue from "vue";
import App from "./App.vue";
import Login from "./Login";

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

new Vue({
  store,
  render: h => h(Login)
}).$mount("#log-in");
