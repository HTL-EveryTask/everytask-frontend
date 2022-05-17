<template>
  <div class="bg-ghostwhite neomorph-lifted flex w-1/2 mx-auto p-3 rounded-2xl">
    <button
      @click="addTask()"
      class="bg-red-500 self-center font-bold p-2 px-5 rounded-xl"
    >
      ADD
    </button>
  </div>
  <TaskCard
    class="m-4"
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    v-if="!loading"
  />

  <CustomModal v-model="addModal" title="Add a Task">
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
      loading: true,
    };
  },

  methods: {
    addTask() {
      this.addModal = true;
    },
  },

  async mounted() {
    await this.$store.dispatch("updateTasks");
    this.loading = false;
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style scoped></style>