<template>
  <div class="bg-slate-800 p-8 w-1/2 mx-auto m-10 rounded-lg">
    <h1 class="text-blue-300 text-4xl font-bold text-center">Login</h1>
    <h2 class="text-slate-400 text-m text-center">
      ...or
      <router-link to="/register" class="underline">Register</router-link>
    </h2>
    <form @submit.prevent="login()">
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="password"
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
            checked="checked"
          />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="remember"
            class="font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import EveryTask from "../utils/EveryTask";

export default {
  name: "LoginView",
  data() {
    return {
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
      const everyTask = new EveryTask();
      everyTask.login(this.email, this.password);

      this.$store.state.everyTask = everyTask;
    },
  },
};
</script>

<style scoped></style>