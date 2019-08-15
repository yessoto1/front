<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true" title="Añadir mejor práctica"></el-button>

        <el-dialog
                title="Nueva Mejor Práctica"
                :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="Código del riesgo asociado:" :label-width="formLabelWidth">
                    <el-input v-model="bestPracticeRequestDto.riskId" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Nombre:" :label-width="formLabelWidth">
                    <el-input v-model="bestPracticeRequestDto.bestPracticeName" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Tipo" :label-width="formLabelWidth">
                    <el-select v-model="bestPracticeRequestDto.practiceTypeId" placeholder="Elegir tipo" style="width: 400px;">
                        <el-option label="Operacional" value="1" ></el-option>
                        <el-option label="Preventivo" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancelar</el-button>
            <el-button type="primary" @click="saveBestPractice">Guardar</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "NewBestPractice",
        data() {
            return {
                dialogFormVisible: false,
                bestPracticeRequestDto: {
                    riskId: '',
                    bestPracticeName:'',
                    practiceTypeId: ''
                },
                formLabelWidth: '150px'
            };
        },
        methods: {
            saveBestPractice() {
                this.$store.dispatch('saveBestPractice', this.bestPracticeRequestDto)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>