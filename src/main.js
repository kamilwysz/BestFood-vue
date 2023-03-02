import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faSearch,
  faCircleNotch,
  faPlay,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch, faCircleNotch, faPlay, faBars, faClose);

// CSS
import "./assets/global.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
