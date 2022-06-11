<template>
  <div class="flex flex-nowrap items-center mb-1">

    <CheckCircle :checked="done" @check="setDone"></CheckCircle>

    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="mx-2"/>

    <button @click="deleteSubTask">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </button>
  </div>
</template>

<script>
import CheckCircle from "./icons/CheckCircle.vue";
export default {
  name: "subTask",
  components: {CheckCircle},
  props: ['modelValue'],
  emits: ['update:modelValue', 'delete', 'done'],

  data() {
    return {
      done: false,
    }
  },

  methods: {
    setDone() {
      this.done = !this.done;
      this.$emit("done", this.done);
    },

    deleteSubTask() {
      this.$emit("delete", this.value);
    },
  }
}
</script>

<style scoped>

</style>