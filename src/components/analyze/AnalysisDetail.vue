<template>
    <el-form ref="form" :model="form" label-width="200px">
        <el-form-item>
            <el-col :span="8">
                <h1>Detalle de análisis</h1>
            </el-col>
        </el-form-item>
        <el-form-item label="Impacto">
            <el-col :span="8">
                <el-select v-model="form.impact" placeholder="Elegir impacto">
                    <el-option label="Menor" value="1"></el-option>
                    <el-option label="Moderado" value="2"></el-option>
                    <el-option label="Mayor" value="3"></el-option>
                    <el-option label="Catastrófico" value="4"></el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="Probabilidad">
            <el-col :span="8">
                <el-select v-model="form.probability" placeholder="Elegir probabilidad">
                    <el-option label="Excepcional" value="1"></el-option>
                    <el-option label="Poco frecuente" value="2"></el-option>
                    <el-option label="Frecuente" value="3"></el-option>
                    <el-option label="Muy frecuente" value="4"></el-option>
                </el-select>
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
        <el-form-item label="Control">
            <el-col :span="8">
                <!-- añadir botón de agregar control -->
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
        name: "AnalysisDetail",
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