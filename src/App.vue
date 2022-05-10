<template>
  <div class="app">
    <NavBar class = "navbar"/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<style lang="scss" scoped>

.navbar{
  position: fixed;
  top: 0;
  left: 0;
}



</style>
