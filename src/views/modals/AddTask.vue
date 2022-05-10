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
      <textarea v-model="task.notes" placeholder="Notes"></textarea>

      <button class="bg-cornflower p-4 mx-auto" @click="this.$emit('close')">
        Add Task
      </button>
    </div>

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

      <button class="bg-cornflower p-4 mx-auto" @click="$emit('confirm')">
        Add Task
      </button>
    </div>

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

      <button class="bg-cornflower p-4 mx-auto" @click="scope.close">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  emits: ["confirm", "cancel"],

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
      // TODO: plz Add task to database
      console.log("close modal");
    },
  },
};
</script>

<style scoped>
.container {
  color: black;
}
</style>
