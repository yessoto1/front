<template>
    <el-form label-width="200px">
        <el-form-item>
            <el-col :span="8">
                <h1>Tratamiento</h1>
            </el-col>
        </el-form-item>
        <el-form-item label="Código de riesgo asociado:">
            <el-col :span="8">
                <el-input v-model="treatmentRequestDto.riskId" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="Nombre">
            <el-col :span="8">
                <el-input v-model="treatmentRequestDto.treatmentName" autocomplete="off" placeholder="Ingrese nombre de tratamiento"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="Respuesta al riesgo">
            <el-col :span="8">
                <el-select v-model="treatmentRequestDto.riskResponseId" placeholder="Elegir respuesta al riesgo">
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
                        v-model="treatmentRequestDto.description">
                </el-input>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-col :span="8">
                <el-button type="primary" @click="saveTreatment">Guardar</el-button>
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
                treatmentRequestDto: {
                    riskId: '',
                    treatmentName:'',
                    riskResponseId:'',
                    description:''
                }
            }
        },
        methods: {
            saveTreatment() {
                this.$store.dispatch('saveTreatment', this.treatmentRequestDto)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>
    .el-select {
        width: 100%;
    }
</style>