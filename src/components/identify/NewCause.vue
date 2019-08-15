<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true" title="Añadir causa"></el-button>

        <el-dialog
                title="Nueva Causa"
                :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="Código de riesgo asociado:" :label-width="formLabelWidth">
                    <el-input v-model="causeRequestDto.riskId" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Descripción:" :label-width="formLabelWidth">
                    <el-input v-model="causeRequestDto.causeDescription" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Porcentaje:" :label-width="formLabelWidth">
                    <el-input v-model="causeRequestDto.percent" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Área responsable" :label-width="formLabelWidth">
                    <el-select v-model="causeRequestDto.areaResponsableId" placeholder="Elegir área responsable" style="width: 400px;">
                        <el-option label="Directorio" value="1" ></el-option>
                        <el-option label="Área comercial" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancelar</el-button>
            <el-button type="primary" @click="saveCause">Guardar</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "NewCause",
        data() {
            return {
                dialogFormVisible: false,
                causeRequestDto: {
                    riskId:'',
                    causeDescription: '',
                    percent:'',
                    areaResponsableId: ''
                },
                formLabelWidth: '150px'
            };
        },
        methods: {
            saveCause() {
                this.$store.dispatch('saveCause', this.causeRequestDto)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>