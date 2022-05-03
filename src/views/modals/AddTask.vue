<template>
  <router-link to="/tasks" class="btn btn-primary">
    <i class="fas fa-arrow-left"></i>
    Back
  </router-link>
  <div class="container bg-slate-600">
    <h1>Adding a Task</h1>
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
      <textarea v-model="task.notes" placeholder="Notes"></textarea>

      <button class="bg-cornflower p-4 mx-auto" @click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
import EveryTask from '../../utils/EveryTask';
export default {
  name: "AddTask",

  data() {
    return {
      task: {
        title: "",
        description: "",
        dueDate: "",
        createDate: "",
        note: "",
      },
    };
  },

  mounted() {
    this.$refs.createdDate.valueAsDate = new Date();
    this.$refs.dueDate.valueAsDate = new Date();
  },

  methods: {
    addTask() {
      var task = new EveryTask;
      task.addTask();
    },
  },
};
</script>

<style scoped>
.container {
  color: black;
  background-color: white;
  padding: 20px;
  margin: 10px;
}
</style>
