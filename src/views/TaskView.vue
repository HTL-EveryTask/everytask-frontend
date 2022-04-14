<template>
  <div class="text-black bg-slate-400 w-1/2 mx-auto flex p-6 rounded-2xl">
    <input type="checkbox" v-model="task.completed" class="mr-6" />
    <div>
      <h1 class="text-xl font-bold">{{ task.title }}</h1>
      <p class="text-sm">{{ task.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskView",
  props: {
    task: {
      type: Object,
      default: function () {
        return {
          title: "TASK_TITLE",
          description: "TASK_DESCRIPTION",
          completed: false,
          priority: 1,
          due_date: "01-01-1970",
        };
      },
    },
  },
};
</script>

<style scoped></style>
