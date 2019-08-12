<template>
    <div id="log-in">
        <form-login></form-login>
    </div>
</template>

<script>
    import FormLogin from "./components/login/FormLogin";

    export default {
        name: "Login",
        components: {
            FormLogin
        }
    }
</script>

<style scoped>

</style>