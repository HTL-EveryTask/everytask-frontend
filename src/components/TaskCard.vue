<template>
  <div class="flex">
    <div
      class="text-raisin-500 bg-ghostwhite w-1/2 mx-auto flex p-6 rounded-2xl neomorph-lifted-sm"
      @click="editModal = true"
    >
      <div class="flex justify-center items-center mr-6">
        <check-circle @click.stop @check="handleCheck()" :checked="!!isDone" />
      </div>
      <div>
        <h1 class="text-xl font-bold">{{ task.title }}</h1>
        <p class="text-sm break-all">{{ task.description }}</p>
      </div>

      <div class="ml-auto flex flex-nowrap menu-toggle-wrap">
        <TaskMenu @click.stop @clickOption="clickMenu"></TaskMenu>
      </div>

    </div>

    <CustomModal :lock-scroll="false" v-model="editModal" title="Edit Task">
      <EditTask @close="editModal = false" :task="task"></EditTask>
    </CustomModal>
  </div>
</template>

<script>
import CheckCircle from "./icons/CheckCircle.vue";
import CustomModal from "./CustomModal.vue";
import EditTask from "../views/modals/EditTask.vue";
import TaskMenu from "./TaskMenu.vue";

export default {
  name: "TaskCard",
  components: {TaskMenu, EditTask, CustomModal, CheckCircle},
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
      editModal: false,
      isDone: this.task.done,
    };
  },

  methods: {
    async deleteTask() {
      await this.$store.getters.everyTask.deleteTask(this.task["pk_task_id"]);
      this.$store.dispatch("updateTasks");
    },

    async handleCheck() {
      // this.$store.dispatch("toggleTask", this.task["pk_task_id"]);
      await this.$store.getters.everyTask.switchTaskStatus(
        this.task["pk_task_id"]
      );
      this.isDone = !this.isDone;
      console.log(this.isDone);
    },

    clickMenu(option) {
      if (option === "Edit") {
        this.editModal = true;
      } else if (option === "Delete") {
        this.deleteTask();
      }
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

.flex:hover {
  cursor: pointer;
}
</style>
