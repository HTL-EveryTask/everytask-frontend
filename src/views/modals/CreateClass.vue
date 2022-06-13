<template>
  <div>
    <div class="input-field">
      <label>Name</label>
      <input type="text" v-model="className" />
    </div>
    <button class="btn-cornflower" @click="createClass">Create</button>
  </div>
</template>

<script>
import WebUntis from "webuntis";
import axios from "axios";

export default {
  name: "CreateClass",

  data() {
    return {
      className: "",
    };
  },

  methods: {
    async createClass() {
    },
  },
};
</script>

<style scoped></style>
