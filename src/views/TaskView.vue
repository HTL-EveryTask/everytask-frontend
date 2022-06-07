<template>
  <div
    class="bg-ghostwhite neomorph-lifted-sm flex w-1/2 mx-auto p-3 rounded-2xl"
  >
    <button @click="addTask()" class="btn-cornflower">ADD</button>
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
import router from "../router";

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
    if (!this.$store.getters.everyTask.getToken()) {
      await router.push("/");
    }

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
