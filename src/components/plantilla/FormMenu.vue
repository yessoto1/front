<template>
    <el-col :span="4">
        <h5>José Daniel</h5>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1" @click="$router.replace('/welcome')">
                <i class="el-icon-document"></i>
                <span>Reportes</span>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.replace('/risk-manage')">
                <i class="el-icon-document"></i>
                <span>Gestión de riesgos</span>
            </el-menu-item>
<!--            <el-button type="primary" @click="$router.replace('/welcome')">Ingresar</el-button>-->
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Configuración</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">Colaboradores</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        name: "navbar",
        components:{
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>