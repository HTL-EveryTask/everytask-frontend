<template>
  <div
    class="bg-slate-800 text-black w-1/3 p-3 rounded-br-2xl text-gray-900 dark:text-gray-300"
  >
    <h1 class="font-bold text-2xl mb-4">EveryTask</h1>
    <ul>
      <li class="nav-element">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-element">
        <router-link to="/register">Register</router-link>
      </li>
      <li class="nav-element">
        <router-link to="/tasks">Tasks</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-element {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  @apply font-bold;
}

.nav-element:hover {
  @apply transition-all;
  @apply bg-slate-900 text-blue-300 ;
}
</style>
