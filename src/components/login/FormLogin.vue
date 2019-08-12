<template>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Iniciar Sesión"></el-form-item>
        <el-form-item>
            <el-input v-model="form.email" placeholder="Ingrese correo electrónico"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="form.password" autocomplete="off"
                      placeholder="Ingrese contraseña"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Ingresar</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "FormLogin",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            };
        },
        methods: {}
    }
</script>

<style scoped>

</style>