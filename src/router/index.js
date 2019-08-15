import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import FormLogin from "../components/login/FormLogin";
import ListProcess from "../components/process/ListProcess";
import FormNavbar from "../components/plantilla/FormNavbar";
import FormMenu from "../components/plantilla/FormMenu";
import OpenNewProcess from "../components/process/OpenNewProcess";
import ListRisks from "../components/risk/ListRisks";
import OpenNewRisk from "../components/risk/OpenNewRisk";
import ListCauses from "../components/identify/ListCauses";
import NewCause from "../components/identify/NewCause";
import ListBestPractices from "../components/identify/ListBestPractices";
import NewBestPractice from "../components/identify/NewBestPractice";
import AnalysisDetail from "../components/analyze/AnalysisDetail";
import Treatment from "../components/treatment/Treatment";
import Welcome from "../components/welcome/Welcome";

Vue.use(Vuex);
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: FormLogin
        },
        {
            path: '/welcome',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/form-navbar',
            name: 'FormNavbar',
            component: FormNavbar
        },
        {
            path: '/form-menu',
            name: 'FormMenu',
            component: FormMenu
        },
        {
            path: '/list-process',
            name: 'ListProcess',
            component: ListProcess
        },
        {
            path: '/new-process',
            name: 'OpenNewProcess',
            component: OpenNewProcess
        },
        {
            path: '/list-risks',
            name: 'ListRisks',
            component: ListRisks
        },
        {
            path: '/new-risk',
            name: 'OpenNewRisk',
            component: OpenNewRisk
        },
        {
            path: '/list-causes',
            name: 'ListCauses',
            component: ListCauses
        },
        {
            path: '/new-cause',
            name: 'NewCause',
            component: NewCause
        },
        {
            path: '/list-best-practice',
            name: 'ListBestPractices',
            component: ListBestPractices
        },
        {
            path: '/new-best-practice',
            name: 'NewBestPractice',
            component: NewBestPractice
        },
        {
            path: '/analysis-detail',
            name: 'AnalysisDetail',
            component: AnalysisDetail
        },
        {
            path: '/treatment',
            name: 'Treatment',
            component: Treatment
        },
    ]
});