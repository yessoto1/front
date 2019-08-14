<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="Acciones"
                prop="id">
            <el-button
                    size="mini" type="warning" icon="el-icon-edit" title="Editar riesgo"
                    @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button
                    size="mini" type="danger" icon="el-icon-close" title="Eliminar riesgo"
                    @click="handleEdit(scope.$index, scope.row)"></el-button>
        </el-table-column>
        <el-table-column
                label="Código de riesgo"
                prop="id">
        </el-table-column>
        <el-table-column
                label="Tipo de riesgo"
                prop="type">
        </el-table-column>
        <el-table-column
                label="Nombre de riesgo"
                prop="name">
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
                        size="mini" type="warning" icon="el-icon-view" title="Identificar" style="background-color: #26a69a; border-color: #26a69a"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                        size="mini"
                        type="success" icon="el-icon-user-solid" title="Analizar y Evaluar"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                <el-button
                        size="mini"
                        type="primary" icon="el-icon-paperclip" title="Tratar"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ListRisks",
        data() {
            return {
                tableData: [{
                    id: '1',
                    type: 'Calidad',
                    name:'Riesgo 1'
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