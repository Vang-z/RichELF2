import {defineClientConfig} from "@vuepress/client";
import {defineAsyncComponent} from "vue";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));
const HeroHitokoto = defineAsyncComponent(() => import("./components/HeroHitokoto.vue"));
const Repobeats = defineAsyncComponent(() => import("./components/Repobeats.vue"));

export default defineClientConfig({
  setup() {
    if (typeof document !== 'undefined') {
      document.oncontextmenu = function (_) {
        return false;
      };
    }
  },
  rootComponents: [
    FooterRunTime,
    HeroHitokoto,
    Repobeats,
  ],
});
