<template>
  <div class="app">
    <NavBar class="navbar" />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}

.content {
  flex-grow: 1;
}
</style>