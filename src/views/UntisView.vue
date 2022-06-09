<template>
  <div
    class="h-full min-h-screen bg-ghostwhite flex justify-center content-center flex-col"
  >
    <div v-if="showLogin" class="login-card neomorph-lifted">
      <div class="logo-box block mx-auto">
        <WebUntisSymbol class="logo"></WebUntisSymbol>
      </div>
      <header class="text-center m-6 mb-8">
        <h1 class="text-4xl text-raisin-500">Connect to Webuntis</h1>
      </header>

      <div class="form">
        <div class="input-field">
          <label for="domain">Domain</label>
          <input id="domain" type="text" v-model="domain" placeholder="Domain" />
        </div>
        <div class="input-field">
          <label for="school">School</label>
          <input id="school" type="text" v-model="school" placeholder="School" />
        </div>
        <div class="input-field">
          <label for="username">Username</label>
          <input id="username" type="username" v-model="username" placeholder="Username" />
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Password" />
          <div class="subtext-right">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <button
          class="btn-cornflower"
          @click="login"
          :disabled="!domain || !school || !username || !password"
        >
          Login
        </button>
      </div>
    </div>
    <div v-if="!showLogin">

    </div>
  </div>
</template>

<script>
import WebUntisSymbol from "../components/icons/UntisSymbol.vue";

export default {
  name: "UntisView",
  components: { WebUntisSymbol },
  data() {
    return {
      school: "htl3r",
      username: "8082",
      password: "na sicher nicht",
      domain: "urania.webuntis.com",
      showLogin: true,
    };
  },

  methods: {
    login() {
      this.showLogin = false;
      //make new untis object using the data from the form and push it to the store
      this.$store.commit("addUntis", {
        school: this.school,
        username: this.username,
        password: this.password,
        domain: this.domain,
      });
    },
  }
};
</script>

<style scoped>
.login-card {
  @apply bg-ghostwhite p-8 mx-auto rounded-3xl text-raisin-500;
  @apply h-full w-full md:h-auto md:w-2/3 md:max-w-xl flex justify-center content-center flex-col;
}

.logo {
  @apply mx-auto block h-full;
  width: 120px;
}
</style>
