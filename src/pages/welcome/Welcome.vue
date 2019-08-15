<template>
    <div>
        <form-navbar></form-navbar>
        <form-menu></form-menu>
    </div>
</template>

<script>
    import FormMenu from "../../components/plantilla/FormMenu";
    import FormNavbar from "../../components/plantilla/FormNavbar";

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