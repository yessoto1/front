<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="Código"
                prop="id">
        </el-table-column>
        <el-table-column
                label="Nombre"
                prop="name">
        </el-table-column>
        <el-table-column
                label="Tipo"
                prop="type">
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
                        size="mini" type="warning" icon="el-icon-edit" title="Editar mejor práctica"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                        size="mini" type="danger" icon="el-icon-close" title="Eliminar mejor práctica"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ListBestPractices",
        data() {
            return {
                tableData: [{
                    id: '1',
                    name: 'Mejor práctica 1',
                    type:'Operacional'
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