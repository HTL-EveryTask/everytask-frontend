import Vuex from "vuex";
import EveryTask from "../utils/EveryTask";
import Untis from "../utils/Untis.js";

export const store = new Vuex.Store({
    state: {
        everyTask: new EveryTask(),
        untis: new Untis(),
        tasks: [],
    },
    getters: {
        everyTask: (state) => state.everyTask,
        tasks: (state) => state.tasks,
        untis: (state) => state.untis,
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

        addUntis(state, data) {
            state.untis.initialize(data.domain, data.school, data.username, data.password);
        },

        clearStore(state) {
            state.tasks = [];
            state.untis = new Untis();
            state.everyTask = new EveryTask();
        }
    },

    actions: {

        updateTasks({commit, state}) {
            state.everyTask.getTasks().then((tasks) => {
                commit("setTasks", tasks);
            });
        },

        logout({commit, state}) {
            state.everyTask = new EveryTask();
            // delete localStorage.token;
            // delete localStorage.username;
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            //clear store
            commit("clearStore");
        },
    },
});
