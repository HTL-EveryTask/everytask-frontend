import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./services/store";
import "./index.css";
import { vfmPlugin } from "vue-final-modal";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(
  vfmPlugin({
    key: "$vfm",
    componentName: "VueFinalModal",
    dynamicContainerName: "ModalsContainer",
  })
);

app.mount("#app");
