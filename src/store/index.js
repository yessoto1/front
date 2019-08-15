import Vue from 'vue';
import Vuex from 'vuex';
import newProcess from "./process/newProcess";
import newRisk from "./risk/newRisk";
import newCause from "./identify/newCause";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newProcess,
        newRisk,
        newCause
    },
    strict: true
});