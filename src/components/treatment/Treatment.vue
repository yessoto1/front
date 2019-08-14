<template>
    <el-form ref="form" :model="form" label-width="200px">
        <el-form-item>
            <el-col :span="8">
                <h1>Tratamiento</h1>
            </el-col>
        </el-form-item>
        <el-form-item label="Nombre">
            <el-col :span="8">
                <el-input v-model="form.name" autocomplete="off" placeholder="Ingrese nombre de tratamiento"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="Respuesta al riesgo">
            <el-col :span="8">
                <el-select v-model="form.impact" placeholder="Elegir respuesta al riesgo">
                    <el-option label="Aceptar" value="1"></el-option>
                    <el-option label="Evitar" value="2"></el-option>
                    <el-option label="Contingencia" value="3"></el-option>
                    <el-option label="Reducir" value="4"></el-option>
                    <el-option label="Transferir" value="5"></el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="Descripción detallada">
            <el-col :span="8">
                <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="Ingrese descripción"
                        auto-complete="off"
                        v-model="form.description">
                </el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="Fecha de evaluación">
            <el-col :span="8">
                <el-date-picker type="date" placeholder="Elegir fecha" v-model="form.evaluationDate" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="¿Es significante?">
            <el-col :span="8">
                <el-checkbox label="" name="type" v-model="form.isSignificant"></el-checkbox>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-col :span="8">
                <el-button type="primary" @click="onSubmit">Guardar</el-button>
                <el-button>Cancelar</el-button>
            </el-col>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Treatment",
        data() {
            return {
                form: {
                    impact: '',
                    probability:'',
                    evaluationDate:'',
                    isSignificant:''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .el-select {
        width: 100%;
    }
</style>