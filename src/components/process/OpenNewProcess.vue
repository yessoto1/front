<template>
    <div>
        <div class="form-group">
            <el-button type="text" @click="dialogFormVisible = true">Agregar</el-button>
            <el-dialog
                    title="Nuevo Proceso"
                    :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form">
                    <el-form-item label="Nombre:" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">Guardar</el-button>
        </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OpenNewProcess",
        data() {
            return {
                dialogFormVisible: false,
                form: {
                    name: ''
                },
                formLabelWidth: '120px'
            };
        }
    }
</script>

<style scoped>

</style>