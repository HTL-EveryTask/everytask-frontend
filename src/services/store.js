import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    user: {
      id: null,
      name: null,
      email: null,
      token: null,
      avatar: null,
      role: null,
      isLoggedIn: false,
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    isSuccess: false,
    successMessage: null,
  },
});
