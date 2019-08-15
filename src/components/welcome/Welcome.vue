<template>
    <div>
        <form-navbar></form-navbar>
        <form-menu></form-menu>
        <ul>
            <li>
                <router-link to="/">Login</router-link>
            </li>
            <li>
                <router-link to="form-menu">Menu</router-link>
            </li>
            <li>
                <router-link to="form-navbar">Navbar</router-link>
            </li>
            <li>
                <router-link to="list-process">ListProcess</router-link>
            </li>
            <li>
                <router-link to="new-process">NewProcess</router-link>
            </li>
            <li>
                <router-link to="list-risks">ListRisks</router-link>
            </li>
            <li>
                <router-link to="new-risk">NewRisk</router-link>
            </li>
            <li>
                <router-link to="list-causes">ListCauses</router-link>
            </li>
            <li>
                <router-link to="new-cause">NewCause</router-link>
            </li>
            <li>
                <router-link to="list-best-practice">ListBestPractice</router-link>
            </li>
            <li>
                <router-link to="new-best-practice">NewBestPractice</router-link>
            </li>
            <li>
                <router-link to="analysis-detail">AnalysisDetail</router-link>
            </li>
            <li>
                <router-link to="treatment">Treatment</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import FormMenu from "../plantilla/FormMenu";
    import FormNavbar from "../plantilla/FormNavbar";

    export default {
        name: "Welcome",
        components:{
            FormMenu,
            FormNavbar
        }
    }
</script>

<style scoped>

</style>