import { createApp } from "vue";
import App from "./App.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount("#app");
