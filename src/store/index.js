import Vue from 'vue';
import Vuex from 'vuex';
import newProcess from "./process/newProcess";
import newRisk from "./risk/newRisk";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newProcess,
        newRisk
    },
    strict: true
});