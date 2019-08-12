<template>
  <div id="app">
    <test-component></test-component>
  </div>
</template>

<script>
import TestComponent from "./components/process/SaveProcess";

export default {
  name: "app",
  components: {
    TestComponent
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
