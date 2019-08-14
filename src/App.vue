<template>
    <div id="app">
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
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        components: {},
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111111;
    }
</style>
