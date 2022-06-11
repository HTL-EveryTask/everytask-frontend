<template>
  <div
    class="bg-ghostwhite neomorph-lifted-sm flex w-1/2 mx-auto p-3 rounded-2xl"
  >
    <button @click="addTask()" class="btn-cornflower">ADD</button>
  </div>
  <TaskCard
    class="m-4"
    v-for="task in tasks"
    :key="task"
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
import SearchDropDown from "../components/SearchDropDown.vue";

export default {
  name: "TaskView",
  components: { SearchDropDown, AddTask, CustomModal, TaskCard },

  data() {
    return {
      addModal: false,
      loading: true,

      dummy: [
        {
          name: "Test",
          description: "Test",
        },
        {
          name: "Test2",
          description: "Test2",
        },
        {
          name: "Test3",
          description: "Test3",
        },
      ],
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
