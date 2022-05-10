import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
    token: state => state.token
  },
});
