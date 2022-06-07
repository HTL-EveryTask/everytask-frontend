<template>
  <div>
    <button v-if="done" @click="done = !done">A</button>
    <button v-else @click="done = !done">B</button>

    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>

    <button @click="deleteSubTask">X</button>
  </div>
</template>

<script>
export default {
  name: "subTask",

  props: ['modelValue'],
  emits: ['update:modelValue','delete'],

  data() {
    return {
      done: false,
    }
  },

  methods: {
    deleteSubTask() {
      this.$emit("delete", this.value);
    },
  }
}
</script>

<style scoped>

</style>