<template>
  <div v-for="n in 10" :key="n" class="m-2">
    <TaskCard />
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "TaskView",
  components: { TaskCard },

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

<style scoped>
.outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
