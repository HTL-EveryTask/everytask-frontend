import Vuex from "vuex";
import EveryTask from "../utils/EveryTask";

export const store = new Vuex.Store({
  state: {
    everyTask: new EveryTask(),
  },
  getters: {
    everyTask: (state) => state.everyTask,
  },
});
