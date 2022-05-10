<template>
  <div
    class="full-screen bg-ghostwhite flex justify-center content-center flex-col"
  >
    <div class="login-card">
      <div class="logo-box block mx-auto">
        <EveryTaskSymbol class="logo"></EveryTaskSymbol>
      </div>
      <header class="text-center m-6 mb-8">
        <h1 class="text-4xl text-raisin-500">Login to EveryTask</h1>
        <router-link to="/register">
          <h2 class="text-raisin-300">
            or <span class="hover:underline">Register</span>
          </h2>
        </router-link>
      </header>

      <div class="form">
        <div class="input-field">
          <label for="email">E-Mail</label>
          <input type="text" v-model="email" placeholder="Email" />
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="Password" />
          <div class="subtext-right">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <button
          class="cornflower-button"
          @click="login"
          :disabled="!email || !password"
        >
          Login
        </button>
      </div>
    </div>

    <div>
      <button class="cornflower-button" @click="showModal = true">
        Open Dynamic Modal
      </button>
    </div>

    <CustomModal v-model="showModal" title="Add a Task">
      <AddTask @close="showModal = false" />
    </CustomModal>
  </div>
</template>

<script>
import EveryTask from "../utils/EveryTask";
import EveryTaskSymbol from "../components/icons/EveryTaskSymbol.vue";
import AddTask from "./modals/AddTask.vue";
import CustomModal from "../components/CustomModal.vue";
import router from "../router";

export default {
  name: "LoginView",
  components: { AddTask, CustomModal, EveryTaskSymbol },
  data() {
    return {
      email: "yes@gmail.com",
      password: "YOMAMA",
      showModal: false,
    };
  },
  methods: {
    async login() {
      console.log("Logging in...");
      console.log(this.email);
      console.log(this.password);
      this.$store.getters.everyTask.login(this.email, this.password);
      // redirect to tasks
      await router.push("/tasks");
    },
  },
};
</script>

<style scoped>
.login-card {
  @apply bg-ghostwhite p-8 mx-auto rounded-3xl text-raisin-500;
  @apply h-full w-full md:h-auto md:w-2/3 md:max-w-xl flex justify-center content-center flex-col;
  box-shadow: 20px 20px 41px #c9c9e0, -25px -25px 41px #ffffff;
}

.logo {
  @apply mx-auto block;
  width: 75px;
}
</style>