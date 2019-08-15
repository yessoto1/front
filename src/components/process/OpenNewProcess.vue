<template>
    <div class="form-group">
        <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>

        <el-dialog
                title="Nuevo Proceso"
                :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="Nombre:" :label-width="formLabelWidth">
                    <el-input v-model="name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="saveProcess">Guardar</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "OpenNewProcess",
        data() {
            return {
                dialogFormVisible: false,
                name:'',
                formLabelWidth: '120px'
            };
        },
        methods: {
            saveProcess() {
                this.$store.dispatch('saveProcess', this.name)
                    .then((response) => {
                        this.$message(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>