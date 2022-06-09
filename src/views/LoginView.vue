<template>
  <div
    class="full-screen bg-ghostwhite flex justify-center content-center flex-col"
  >
    <div class="login-card neomorph-lifted">
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
          class="btn-cornflower"
          @click="login"
          :disabled="!email || !password"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EveryTaskSymbol from "../components/icons/EveryTaskSymbol.vue";
import router from "../router";

export default {
  name: "LoginView",
  components: { EveryTaskSymbol },
  data() {
    return {
      email: "yes@gmail.com",
      password: "YOMAMA",
      showModal: false,
    };
  },

  created() {
    // log the user out if they are logged in
    if (this.$store.state.everyTask.getToken()) {
      this.$store.dispatch("logout");
    }
  },

  methods: {
    async login() {
      console.log("Logging in...");
      console.log(this.email);
      console.log(this.password);
      await this.$store.getters.everyTask
        .login(this.email, this.password)
        .then(() => {
          if (this.$store.getters.everyTask.getToken()) {
            router.push("/tasks");
          }
        });
    },
  },
};
</script>

<style scoped>
.login-card {
  @apply bg-ghostwhite p-8 mx-auto rounded-3xl text-raisin-500;
  @apply h-full w-full md:h-auto md:w-2/3 md:max-w-xl flex justify-center content-center flex-col;
}

.logo {
  @apply mx-auto block;
  width: 75px;
}
</style>