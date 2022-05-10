<template>
  <div class="bg-slate-800 flex w-1/2 mx-auto p-3 rounded-2xl">
    <button
      @click="addTask()"
      class="bg-red-500 self-center font-bold p-2 px-5 rounded-xl"
    >
      ADD
    </button>
  </div>
  <TaskCard class="m-2" v-for="task in tasks" :key="task.id" :task="task" />
  <Modal></Modal>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import Modal from "./modals/Modal.vue";

export default {
  name: "TaskView",
  components: { Modal, TaskCard },

  data() {
    return {
      // TODO plz delete beispieldaten
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description 1",
          status: "todo",
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description 2",
          status: "todo",
        },
        {
          id: 3,
          title: "Task 3",
          description: "Description 3",
          status: "todo",
        },
        {
          id: 4,
          title: "Task 4",
          description: "Description 4",
          status: "todo",
        },
        {
          id: 5,
          title: "Task 5",
          description: "Description 5",
          status: "todo",
        },
        {
          id: 6,
          title: "Task 6",
          description: "Description 6",
          status: "todo",
        },
        {
          id: 7,
          title: "Task 7",
          description: "Description 7",
          status: "todo",
        },
        {
          id: 8,
          title: "Task 8",
          description: "Description 8",
          status: "todo",
        },
        {
          id: 9,
          title: "Task 9",
          description: "Description 9",
          status: "todo",
        },
        {
          id: 10,
          title: "Task 10",
          description: "Description 10",
          status: "todo",
        },
      ],
    };
  },

  methods: {
    addTask() {
      this.$router.push("/tasks/addTask");
    },
  },

  mounted() {
    // TODO plz get Tasks and save them to this.tasks
  },
};
</script>

<style scoped></style>
