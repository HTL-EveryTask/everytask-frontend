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
      <input ref="dueDate" type="date" v-model="newTask.due_time" />

      <label for="createDate">Start Date</label>
      <input ref="createdDate" type="date" v-model="newTask.create_time" />

      <label for="notes">Notes</label>
      <textarea v-model="newTask.note" placeholder="Notes"></textarea>

      <div class="relative">
        <label for="school">Subject</label>
        <SearchDropDown
            :entries="$store.getters.untis.subjects"
            @select="task.subject = $event"
        />
      </div>

      <div>
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

      <button class="btn-cornflower" @click="editTask()">Save Changes</button>
    </div>
  </div>
</template>

<script>

import SubTask from "../../components/SubTask.vue";
import SearchDropDown from "../../components/SearchDropDown.vue";

export default {
  name: "EditTask",
  emits: ["close"],
  components: {SubTask, SearchDropDown},
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
        due_time: this.task.due_time.split(" ")[0],
        create_time: this.task.create_time.split(" ")[0],
        note: this.task.note,
        subTasks: this.task.subTasks,
        subject: this.task.subject,
      },
    };
  },

  created() {
    console.log(this.task);
  },

  methods: {
    // TODO PLZ SUBTASKS AND SUBJECT AGAIN
    async editTask() {
      this.$emit("close", this.newTask);
      await this.$store.getters.everyTask.editTaskbyId(
        this.task.id,
        this.newTask.title,
        this.newTask.description,
        this.task.completed,
        this.newTask.due_time,
        this.newTask.note
      );
      this.$store.dispatch("updateTasks");
    },

    addSubTask() {
      if (!this.task.subTasks) {
        this.task.subTasks = [];
      }
      this.task.subTasks.push({text:'',done:false, id:Math.random()});
    },

    deleteSubTask(index){
      this.task.subTasks.splice(index,1);
    },

    setSubTaskDone(index, done){
      this.task.subTasks[index]['done'] = done;
    }
  },
};
</script>

<style scoped></style>
