<template>
  <div class="bg-slate-800 flex w-1/2 mx-auto p-3 rounded-2xl">
    <button
      @click="addTask()"
      class="bg-red-500 self-center font-bold p-2 px-5 rounded-xl"
    >
      ADD
    </button>
  </div>
  <div v-for="n in 10" :key="n" class="m-2">
    <TaskCard />
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "TaskView",
  components: { TaskCard },

  methods: {
    addTask() {
      // A
    },
  },
};
</script>

<style scoped></style>
