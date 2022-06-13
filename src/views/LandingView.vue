<template>
  <div
    class="full-screen bg-ghostwhite flex justify-center content-center flex-col"
  >
    <div class="login-card neomorph-lifted">
      <div class="logo-box block mx-auto">
        <EveryTaskSymbol class="logo"></EveryTaskSymbol>
      </div>
      <header class="text-center m-6 mb-8">
        <h1 class="text-4xl text-raisin-500">Welcome to EveryTask</h1>
        <h2 class="text-raisin-300">Let's get you into a class, shall we?</h2>
      </header>
      <button class="btn-cornflower" @click="showCcModal = true">
        Create a Class
      </button>
      <button class="btn-cornflower" @click="showJcModal = true">Join a Class</button>
    </div>
  </div>

  <CustomModal v-model="showCcModal" title="Create a Class">
    <CreateClass @close="showCcModal = false"></CreateClass>
  </CustomModal>

  <CustomModal v-model="showJcModal" title="Join a Class">
    <JoinClass @close="showJcModal = false"></JoinClass>
  </CustomModal>
</template>

<script>
import router from "../router";
import EveryTaskSymbol from "../components/icons/EveryTaskSymbol.vue";
import CreateClass from "./modals/CreateClass.vue";
import CustomModal from "../components/CustomModal.vue";
import JoinClass from "./modals/JoinClass.vue";

export default {
  name: "LandingView",
  components: { JoinClass, CustomModal, CreateClass, EveryTaskSymbol },
  data() {
    return {
      showCcModal: false,
      showJcModal: false,
    };
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
