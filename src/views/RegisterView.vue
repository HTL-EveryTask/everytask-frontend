<template>
  <div
    class="full-screen bg-ghostwhite flex justify-center content-center flex-col"
  >
    <div class="login-card">
      <div class="logo-box block mx-auto">
        <EveryTaskSymbol class="logo"></EveryTaskSymbol>
      </div>
      <header class="text-center m-6 mb-8">
        <h1 class="text-4xl text-raisin-500">Register to EveryTask</h1>
        <router-link to="/">
          <h2 class="text-raisin-300">
            or <span class="hover:underline">Login</span>
          </h2>
        </router-link>
      </header>

      <div class="form">
        <div class="input-field">
          <label class="block text-sm text-raisin-200" for="password"
            >Username</label
          >
          <input
            class="input-text"
            type="text"
            v-model="username"
            placeholder="Your Username"
          />
        </div>
        <div class="input-field">
          <label class="block text-sm text-raisin-200" for="email"
            >E-Mail</label
          >
          <input
            class="input-text"
            type="text"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div class="input-field">
          <label class="block text-sm text-raisin-200" for="password"
            >Password</label
          >
          <input
            class="input-text"
            type="password"
            v-model="password"
            placeholder="Password"
          />
          <div class="text-xs text-raisin-200 text-right">
            <a href="#" class="text-raisin-100">Forgot password?</a>
          </div>
        </div>

        <button
          class="login-button font-bold transition duration-300 text-ghostwhite px-10 py-3 border-2 border-transparent rounded-full mx-auto block mt-8"
          @click="login"
          :disabled="!username || !email || !password"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EveryTask from "../utils/EveryTask";
import EveryTaskSymbol from "../components/icons/EveryTaskSymbol.vue";

export default {
  name: "RegisterView",
  components: { EveryTaskSymbol },
  data() {
    return {
      username: "",
      email: "yes@gmail.com",
      password: "YOMAMA",
    };
  },
  methods: {
    async login() {
      console.log("Logging in...");
      console.log(this.email);
      console.log(this.password);
      // api call to login php page
      // const everyTask = new EveryTask(this.email, this.password);
      // everyTask.login();
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

.input-field {
  @apply mb-4 mx-auto block w-auto md:w-2/3 w-11/12;
}

.input-text {
  @apply p-2;
  @apply w-full rounded-lg text-raisin-500 bg-ghostwhite border-2 border-ghostwhite-600 focus:border-cornflower-300
  focus:outline-none focus:bg-ghostwhite-600 text-raisin-500;
}

.login-button {
  @apply bg-gradient-to-bl from-steelpink to-steelpink;
}

.login-button:disabled {
  @apply cursor-not-allowed opacity-50;
  @apply bg-gradient-to-bl from-ghostwhite to-ghostwhite;
  @apply text-raisin-500 border-2 border-raisin-200;
}

.login-button:hover:enabled {
  background: linear-gradient(145deg, #ea2bc9, #c524a9);
  box-shadow: 10px 10px 20px #c5c6cf, -10px -10px 20px #ffffff;
}

.login-button:active:enabled {
  background: linear-gradient(145deg, #c524a9, #ea2bc9);
}
</style>
