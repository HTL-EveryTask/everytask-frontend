<template>
  <div class="container">
    <div class="flex flex-col">
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" v-model="task.title" placeholder="Task Title"/>
      </div>

      <div class="input-field">
        <label for="description">Description</label>
        <textarea
            v-model="task.description"
            placeholder="Task Description"
        ></textarea>
      </div>

      <div class="input-field">
        <label for="dueDate">Due Date</label>
        <input ref="dueDate" type="date" v-model="task.dueDate"/>
      </div>

      <div class="input-field">
        <label for="createDate">Start Date</label>
        <input ref="createdDate" type="date" v-model="task.createDate"/>
      </div>

      <div class="input-field">
        <label for="notes">Notes</label>
        <textarea
            v-model="task.note"
            ref="notes"
            placeholder="Notes"
        ></textarea>
      </div>

      <div class="input-field relative">
        <label for="school">Subject</label>
        <SearchDropDown
            :entries="$store.getters.untis.subjects"
            @select="task.subject = $event"
        />
      </div>

      <div class="input-field">
        <label>Subtasks</label>
        <sub-task
            v-for="(s, index) in task.subTasks"
            v-model="task.subTasks[index]['text']"
            :key="s"
            @delete="deleteSubTask(index)"
            @done="(done) => setSubTaskDone(index, done)"
        />

        <button
            class="btn-cornflower w-1/2 mt-5 py-2 px-4 rounded"
            @click="addSubTask"
        >
          Add Sub Task
        </button>
      </div>

      <button class="btn-cornflower" @click="addTask()">Add Task</button>
    </div>
  </div>
</template>

<script>
import SubTask from "../../components/SubTask.vue";
import SearchDropDown from "../../components/SearchDropDown.vue";

export default {
  name: "AddTask",
  components: {SearchDropDown, SubTask},
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
        subject: null,
      },
    };
  },

  mounted() {
    this.$refs.createdDate.valueAsDate = new Date();
    this.$refs.dueDate.valueAsDate = new Date();
    //TODO delete dummy data and reset on mounted
  },

  methods: {
    async addTask() {
      this.$emit("close", this.task);
      //TODO PLZ FÜR SUBTASK AND SUBJECT
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
      this.task.subTasks.push({text: "", done: false, id: Math.random()});
      console.log(this.task);
    },

    deleteSubTask(index) {
      this.task.subTasks.splice(index, 1);
    },

    setSubTaskDone(index, done) {
      this.task.subTasks[index]["done"] = done;
    },
  },
};
</script>

<style scoped>
.container {
  color: black;
}
</style>
