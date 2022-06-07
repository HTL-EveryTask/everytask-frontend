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

      <sub-task v-for="(s,index) in task.subTasks" v-model="task.subTasks[index]" @delete="deleteSubTask(index)"/>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="addSubTask">
        Add Sub Task
      </button>

      <button class="btn-cornflower" @click="addTask()">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
import SubTask from "../../components/subTask.vue";
export default {
  name: "AddTask",
  components: {SubTask},
  emits: ["close"],

  data() {
    return {
      task: {
        title: "AAA",
        description: "AAAAAAAA",
        dueDate: "2022-07-22",
        createDate: "",
        note: "AAAAAAAAA",
        subTasks: [],
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
      //TODO PLZ FÜR SUBTASK
      await this.$store.getters.everyTask.addTask(
        1,
        this.task.title,
        this.task.description,
        false,
        this.task.dueDate,
        this.task.note
      );
      this.$store.dispatch("updateTasks");
    },

    addSubTask() {
      this.task.subTasks.push("");
      console.log(this.task.subTasks);
    },

    deleteSubTask(index){
      this.task.subTasks.splice(index,1);
    }
  },
};
</script>

<style scoped>
.container {
  color: black;
}
</style>
