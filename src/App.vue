<template>
  <div class="app">
    <NavBar class="navbar" v-if="$store.getters.everyTask.getToken()" />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import EveryTask from "./utils/EveryTask";

export default {
  name: "App",
  components: {
    NavBar,
    RouterView,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },

  mounted() {
    if (localStorage.getItem("token")) {
      let everyTask = new EveryTask();
      everyTask.setToken(localStorage.getItem("token"));
      this.$store.state.everyTask = everyTask;
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}

.content {
  flex-grow: 1;
}
</style>
