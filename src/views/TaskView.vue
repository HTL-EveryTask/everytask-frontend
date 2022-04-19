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
};
</script>

<style scoped></style>
