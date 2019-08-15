<template>
    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item>
            <h5 style="color: white;">Iniciar Sesión</h5>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.email" placeholder="Ingrese correo electrónico"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="form.password" autocomplete="off"
                      placeholder="Ingrese contraseña"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="$router.replace('/welcome')">Ingresar</el-button>
        </el-form-item>
    </el-form>
<!--    <Button @click="$router.replace('/create_post')">Edit Post</Button>-->
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
        methods: {
            signIn(form) {
                this.$store.dispatch('signIn', form)
                    .then((response) => {
                        this.$message(response)
                    });
            }
        }
    }
</script>

<style scoped>
    .el-form {
        margin-bottom: 1rem;
        padding-right: 12rem;
        box-sizing: border-box;
        text-align: center;
    }
</style>