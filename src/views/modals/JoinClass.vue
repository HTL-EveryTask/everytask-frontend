<template>
  <div>
    <div class="input-field">
      <label>Name</label>
      <input type="text" v-model="className" />
    </div>
    <div class="input-field">
      <label>Key</label>
      <input type="text" v-model="classKey" />
    </div>

    <button class="btn-cornflower" @click="joinClass">Create</button>
  </div>
</template>

<script>
export default {
  name: "JoinClass",

  data() {
    return {
      className: "",
      classKey: "",
    };
  },

  methods: {
    async joinClass() {
      // todo: check if class exists
    },
  },
};
</script>

<style scoped></style>
