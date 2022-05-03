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

  <Modal></Modal>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import Modal from "./modals/Modal.vue";

export default {
  name: "TaskView",
  components: { Modal, TaskCard },

  methods: {
    addTask() {
      this.$router.push("/tasks/addTask");
    },
  },
};
</script>

<style scoped></style>
