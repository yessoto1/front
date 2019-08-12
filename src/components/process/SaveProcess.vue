<template>
    <el-row type="flex" justify="center">
        <el-col>
            <el-row>
                <el-col :span="8">
                    <el-input v-model="processName"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button class="my-button" type="primary" @click="clearValue">Clear</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button type="success" @click="saveProcess">Send</el-button>
                </el-col>
            </el-row>
            <el-row>
                <p>Current input value is: {{ inputValue }}</p>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "SaveProcess",
    data() {
        return {
            processName: ''
        }
    },
    computed: {
      inputValue() {
          return this.$store.state.test.input;
      }
    },
    methods: {
        clearValue() {
            this.processName = '';
        },
        saveProcess() {
            this.$store.dispatch('saveProcess', this.processName)
                .then((response) => {
                    this.$message(response);
                });
        }
    }
}
</script>

<style scoped>

    .my-button {
        background-color: brown;
        color: azure;
    }
</style>