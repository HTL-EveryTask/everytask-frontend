<template>
  <div class="text-white">
    <router-link to="/">Home</router-link>
    <router-link to="/tasks">Tasks</router-link>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style></style>
