<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="Código"
                prop="id">
        </el-table-column>
        <el-table-column
                label="Descripción"
                prop="description">
        </el-table-column>
        <el-table-column
                label="Porcentaje (%)"
                prop="percent">
        </el-table-column>
        <el-table-column
                label="Área responsable"
                prop="responsableArea">
        </el-table-column>
        <el-table-column
                align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"/>
            </template>
            <template slot-scope="scope">
                <el-button
                        size="mini" type="warning" icon="el-icon-edit" title="Editar riesgo"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                        size="mini" type="danger" icon="el-icon-close" title="Eliminar riesgo"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ListCauses",
        data() {
            return {
                tableData: [{
                    id: '1',
                    description: 'Cause 1',
                    percent:10,
                    responsableArea: 'Directorio'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

</style>