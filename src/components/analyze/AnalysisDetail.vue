<template>
    <el-form label-width="200px">
        <el-form-item>
            <el-col :span="8">
                <h1>Detalle de análisis</h1>
            </el-col>
        </el-form-item>
        <el-form-item label="Código de riesgo:">
            <el-col :span="8">
                <el-input v-model="analysisRequestDto.riskId" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="Impacto">
            <el-col :span="8">
                <el-select v-model="analysisRequestDto.impact" placeholder="Elegir impacto">
                    <el-option label="Menor" value="1"></el-option>
                    <el-option label="Moderado" value="2"></el-option>
                    <el-option label="Mayor" value="3"></el-option>
                    <el-option label="Catastrófico" value="4"></el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="Probabilidad">
            <el-col :span="8">
                <el-select v-model="analysisRequestDto.probability" placeholder="Elegir probabilidad">
                    <el-option label="Excepcional" value="1"></el-option>
                    <el-option label="Poco frecuente" value="2"></el-option>
                    <el-option label="Frecuente" value="3"></el-option>
                    <el-option label="Muy frecuente" value="4"></el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="¿Es significante?">
            <el-col :span="8">
                <el-checkbox label="" name="type" v-model="analysisRequestDto.significant"></el-checkbox>
            </el-col>
        </el-form-item>
        <el-form-item label="Control">
            <el-col :span="8">
                <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"
                           title="Añadir mejor práctica"></el-button>

                <el-dialog
                        title="Agregar Control"
                        :visible.sync="dialogFormVisible">
                    <el-form>
                        <el-form-item label="Nombre:">
                            <el-input v-model="analysisRequestDto.control.name" autocomplete="off"
                                      style="width: 400px;"></el-input>
                        </el-form-item>
                        <el-form-item label="Tipo:">
                            <el-select v-model="analysisRequestDto.control.controlType" placeholder="Elegir tipo de control" style="width: 400px;">
                                <el-option label="Preventivo" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <!--<el-form-item label="Fecha de implementación:">
                            <el-date-picker type="date" placeholder="Elegir fecha" v-model="analysisRequestDto.control.implementationDate"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>-->
                        <el-form-item label="Persona a cargo:">
                            <el-select v-model="analysisRequestDto.control.employeeId" placeholder="Elegir persona a cargo" style="width: 400px;">
                                <el-option label="José Daniel" value="1"></el-option>
                                <el-option label="Luis Miguel" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Grupo responsable:">
                            <el-select v-model="analysisRequestDto.control.responsableGroup" placeholder="Elegir grupo responsable" style="width: 400px;">
                                <el-option label="Gestión de riesgos" value="1"></el-option>
                                <el-option label="Administración" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancelar</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">Guardar</el-button>
                    </span>
                </el-dialog>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-col :span="8">
                <el-button type="primary" @click="saveDetail">Guardar</el-button>
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
                dialogFormVisible: false,
                analysisRequestDto: {
                    riskId: '',
                    impact: '',
                    probability: '',
                    significant: '',
                    control: {
                        name: '',
                        //implementationDate: '',
                        employeeId: '',
                        responsableGroup: '',
                        controlType: ''
                    }
                }
            }
        },
        methods: {
            saveDetail() {
                this.$store.dispatch('saveDetail', this.analysisRequestDto)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>
    .el-select .el-input {
        width: 100%;
    }

</style>