<template>
  <div>
    <div class="input-field">
      <label>Title</label>
      <input type="text" v-model="task.title" />
    </div>
    <div class="input-field">
      <label>Description</label>
      <textarea v-model="task.description"></textarea>
    </div>
  </div>
</template>

<script>
// TODO: no mutating props

export default {
  name: "EditTask",
  emits: ["close"],
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
