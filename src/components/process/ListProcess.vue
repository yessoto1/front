<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="Código de proceso"
                prop="id">
        </el-table-column>
        <el-table-column
                label="Nombre de proceso"
                prop="name">
        </el-table-column>
        <el-table-column
                label="Fecha de creación"
                prop="dateCreated">
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
<!--                <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>-->
                <el-button
                        size="mini" type="primary" icon="el-icon-edit" title="Editar"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                        size="mini"
                        type="danger" icon="el-icon-close" title="Eliminar"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ListProcess",
        data() {
            return {
                tableData: [{
                    id: '1',
                    name: 'Proceso 1',
                    dateCreated:'2016-05-02'
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