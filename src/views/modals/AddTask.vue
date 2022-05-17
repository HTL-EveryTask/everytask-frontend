<template>
  <div class="container">
    <div class="flex flex-col">
      <label for="title">Title</label>
      <input type="text" v-model="task.title" placeholder="Task Title" />

      <label for="description">Description</label>
      <textarea
        v-model="task.description"
        placeholder="Task Description"
      ></textarea>

      <label for="dueDate">Due Date</label>
      <input ref="dueDate" type="date" v-model="task.dueDate" />

      <label for="createDate">Start Date</label>
      <input ref="createdDate" type="date" v-model="task.createDate" />

      <label for="notes">Notes</label>
      <textarea v-model="task.note" placeholder="Notes"></textarea>

      <button class="btn-cornflower" @click="addTask()">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  emits: ["close"],

  data() {
    return {
      task: {
        title: "AAA",
        description: "AAAAAAAA",
        dueDate: "2022-07-22",
        createDate: "",
        note: "AAAAAAAAA",
      },
    };
  },

  mounted() {
    this.$refs.createdDate.valueAsDate = new Date();
    this.$refs.dueDate.valueAsDate = new Date();
  },

  methods: {
    async addTask() {
      this.$emit("close", this.task);
      await this.$store.getters.everyTask.addTask(
        this.task.title,
        this.task.description,
        false,
        this.task.dueDate,
        this.task.note
      );
      this.$store.dispatch("updateTasks");
    },
  },
};
</script>

<style scoped>
.container {
  color: black;
}
</style>
