<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true" title="Añadir mejor práctica"></el-button>

        <el-dialog
                title="Nueva Mejor Práctica"
                :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form">
                <el-form-item label="Nombre:" :label-width="formLabelWidth">
                    <el-input v-model="form.description" autocomplete="off" style="width: 400px;"></el-input>
                </el-form-item>
                <el-form-item label="Tipo" :label-width="formLabelWidth">
                    <el-select v-model="form.responsableArea" placeholder="Elegir tipo" style="width: 400px;">
                        <el-option label="Operacional" value="1" ></el-option>
                        <el-option label="Preventivo" value="2"></el-option>
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
        name: "NewBestPractice",
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