<template>
  <div class="bg-ghostwhite neomorph-lifted flex w-1/2 mx-auto p-3 rounded-2xl">
    <button
      @click="addTask()"
      class="bg-red-500 self-center font-bold p-2 px-5 rounded-xl"
    >
      ADD
    </button>
  </div>
  <TaskCard class="m-4" v-for="task in tasks" :key="task.id" :task="task" />

  <CustomModal v-model="addModal" title="Add Task">
    <AddTask @close="addModal = false" />
  </CustomModal>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import CustomModal from "../components/CustomModal.vue";
import AddTask from "./modals/AddTask.vue";

export default {
  name: "TaskView",
  components: { AddTask, CustomModal, TaskCard },

  data() {
    return {
      addModal: false,
      // TODO plz delete beispieldaten
      tasks: [],
    };
  },

  methods: {
    addTask() {
      this.addModal = true;
    },
  },

  mounted() {
    this.tasks = this.$store.state.everyTask.showTasks();
  },
};
</script>

<style scoped></style>
