import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap";
import store from './store'

createApp(App).use(store).mount("#app");
