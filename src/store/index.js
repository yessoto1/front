import Vue from 'vue';
import Vuex from 'vuex';
import newProcess from "./process/newProcess";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newProcess
    },
    strict: true
});