<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true" title="Añadir causa"></el-button>

        <el-dialog
                title="Nueva Causa"
                :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form">
                <el-form-item label="Descripción:" :label-width="formLabelWidth">
                    <el-input v-model="form.description" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Porcentaje:" :label-width="formLabelWidth">
                    <el-input v-model="form.percent" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Área responsable" :label-width="formLabelWidth">
                    <el-select v-model="form.responsableArea" placeholder="Elegir área responsable" style="width: 400px;">
                        <el-option label="Directorio" value="1" ></el-option>
                        <el-option label="Área comercial" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancelar</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">Guardar</el-button>
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
                form: {
                    description: '',
                    percent:'',
                    responsableArea: ''
                },
                formLabelWidth: '150px'
            };
        }
    }
</script>

<style scoped>

</style>