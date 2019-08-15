<template>
    <div>
        <welcome></welcome>
        <list-process></list-process>
        <open-new-process></open-new-process>
        <list-risks></list-risks>
        <open-new-risk></open-new-risk>
    </div>
</template>

<script>
    import ListRisks from "../../components/risk/ListRisks";
    import OpenNewRisk from "../../components/risk/OpenNewRisk";
    import Welcome from "../welcome/Welcome";
    import ListProcess from "../../components/process/ListProcess";
    import OpenNewProcess from "../../components/process/OpenNewProcess";

    export default {
        name: "RiskManage",
        components: {
            Welcome,
            ListProcess,
            OpenNewProcess,
            ListRisks,
            OpenNewRisk
        }
    }
</script>

<style scoped>

</style>