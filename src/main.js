import Vue from "vue";
import Login from "./Login";

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import store from './store'

import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Login)
}).$mount("#log-in");
