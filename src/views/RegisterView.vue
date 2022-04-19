<template>
  <div class="bg-slate-800 p-8 md:w-1/2 mx-auto m-10 rounded-lg w-80 max-w-2xl">
    <h1 class="text-blue-300 text-4xl font-bold text-center">Register</h1>
    <h2 class="text-slate-400 text-m text-center">
      ...or
      <router-link to="/" class="underline">Login</router-link>
    </h2>
    
    <form @submit.prevent="register()">
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your username</label
        >
        <input
          type="text"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="username"
          required
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <div class="ml-3 text-sm">
        <label
          for="remember"
          class="font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
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
export default {
  name: "RegisterView",
  data() {
    return {
      username: "Julian",
      email: "julian@julian.com",
      password: "JulianZangl",
    };
  },
  methods: {
    async register() {
      console.log("Registering user...");
      console.log(this.username);
      console.log(this.email);
      console.log(this.password);

      //axios call to register user
      axios
        .post("http://localhost:8080/", {
          action: "register",
          email: this.email,
          password: this.password,
          username: this.username,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>