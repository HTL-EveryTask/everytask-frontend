import Vuex from "vuex";
import EveryTask from "../utils/EveryTask";

export const store = new Vuex.Store({
  state: {
    everyTask: new EveryTask(),
    tasks: [],
  },
  getters: {
    everyTask: (state) => state.everyTask,
    tasks: (state) => state.tasks,
  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    updateTask(state, task) {
      state.tasks[state.tasks.indexOf(task)] = task;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },

  actions: {
    updateTasks({ commit, state }) {
      state.everyTask.getTasks().then((tasks) => {
        commit("setTasks", tasks);
      });
    },
  },
});
