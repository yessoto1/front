<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>

        <el-dialog
                title="Nuevo Riesgo"
                :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="Código de proceso:" :label-width="formLabelWidth">
                    <el-input v-model="riskDto.processId" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-select v-model="riskDto.riskType" placeholder="Elegir tipo de riesgo" style="width: 400px;">
                        <el-option label="Estratégico" value="1"></el-option>
                        <el-option label="Calidad" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Nombre:" :label-width="formLabelWidth">
                    <el-input v-model="riskDto.riskName" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancelar</el-button>
            <el-button type="primary" @click="saveRisk">Guardar</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "OpenNewRisk",
        data() {
            return {
                dialogFormVisible: false,
                riskDto: {
                    riskType: '',
                    riskName: '',
                    processId: ''
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            saveRisk() {
                this.$store.dispatch('saveRisk', this.riskDto)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>