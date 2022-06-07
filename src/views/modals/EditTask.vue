<template>
  <div class="container">
    <div class="flex flex-col">
      <label for="title">Title</label>
      <input type="text" v-model="newTask.title" placeholder="Task Title" />

      <label for="description">Description</label>
      <textarea
        v-model="newTask.description"
        placeholder="Task Description"
      ></textarea>

      <label for="dueDate">Due Date</label>
      <input ref="dueDate" type="date" v-model="newTask.dueDate" />

      <label for="createDate">Start Date</label>
      <input ref="createdDate" type="date" v-model="newTask.createDate" />

      <label for="notes">Notes</label>
      <textarea v-model="newTask.note" placeholder="Notes"></textarea>

      <button class="btn-cornflower" @click="editTask()">Add Task</button>
    </div>
  </div>
</template>

<script>
// TODO: no mutating props

export default {
  name: "EditTask",
  emits: ["close"],
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      newTask: {
        title: this.task.title,
        description: this.task.description,
        dueDate: this.task.dueDate,
        createDate: this.task.createDate,
        note: this.task.note,
      },
    };
  },

  methods: {
    async editTask() {
      this.$emit("close", this.newTask);
      await this.$store.getters.everyTask.editTaskbyId(
        this.task.id,
        this.newTask.title,
        this.newTask.description,
        this.task.completed,
        this.newTask.dueDate,
        this.newTask.note
      );
      this.$store.dispatch("updateTasks");
    },
  },
};
</script>

<style scoped></style>
