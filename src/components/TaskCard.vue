<template>
  <div class="text-black bg-slate-100 w-1/2 mx-auto flex p-6 rounded-2xl">
    <div class="flex justify-center items-center mr-6">
      <check-circle />
    </div>
    <div>
      <h1 class="text-xl font-bold">{{ task.title }}</h1>
      <p class="text-sm">{{ task.description }}</p>
    </div>
  </div>
</template>

<script>
import Task from "../models/Task";
import CheckCircle from "./icons/CheckCircle.vue";

export default {
  name: "TaskCard",
  components: { CheckCircle },
  props: {
    task: {
      type: Task,
      default: () => new Task(),
    },
  },
};
</script>

<style scoped></style>
