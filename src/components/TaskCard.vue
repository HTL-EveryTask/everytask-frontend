<template>
  <div class="flex">
    <div
      class="text-black bg-slate-100 w-1/2 mx-auto flex p-6 rounded-2xl neomorph-lifted-sm"
      @click="editModal = true"
    >
      <div class="flex justify-center items-center mr-6">
        <check-circle/>
      </div>
      <div>
        <h1 class="text-xl font-bold">{{ task.title }}</h1>
        <p class="text-sm">{{ task.description }}</p>
      </div>

      <div class="ml-auto flex flex-nowrap">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          @click.stop="deleteTask"
        >
          Delete
        </button>

        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          v-if="deleteConfirm"
          @click.stop="
            () => {
              this.deleteConfirm = false;
            }
          "
        >
          Abbrechen
        </button>
      </div>
    </div>
    <CustomModal v-model="editModal" title="WOAAAA">
      <EditTask @close="editModal = false" :task="task"></EditTask>
    </CustomModal>
  </div>
</template>

<script>
import CheckCircle from "./icons/CheckCircle.vue";
import CustomModal from "./CustomModal.vue";
import AddTask from "../views/modals/AddTask.vue";
import EditTask from "../views/modals/EditTask.vue";

export default {
  name: "TaskCard",
  components: {EditTask, AddTask, CustomModal, CheckCircle },
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "DEFAULT TITLE",
        description: "DEFAULT DESCRIPTION",
      }),
    },
  },

  data() {
    return {
      deleteConfirm: false,
      editModal: false,
    };
  },

  methods: {
    async deleteTask() {
      if (!this.deleteConfirm) {
        this.deleteConfirm = true;
        setTimeout(() => {
          this.deleteConfirm = false;
        }, 4000);
        return;
      }

      await this.$store.getters.everyTask.deleteTask(this.task["pk_task_id"]);
      this.$store.dispatch("updateTasks");
    },
  },
};
</script>

<style scoped>
.dark button {
  background-color: #2e5077;
}

.light button {
  background-color: #a5cefc;
}
</style>
