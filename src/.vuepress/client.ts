import {defineClientConfig} from "@vuepress/client";
import {defineAsyncComponent} from "vue";
// @ts-ignore
import {setupRunningTimeFooter} from "vuepress-theme-hope/presets/footerRunningTime.js";


const HeroHitokoto = defineAsyncComponent(() => import("./components/HeroHitokoto.vue"));
const Repobeats = defineAsyncComponent(() => import("./components/Repobeats.vue"));

export default defineClientConfig({
  setup() {
    if (typeof document !== 'undefined') {
      document.oncontextmenu = function (_) {
        return false;
      };
    }
    setupRunningTimeFooter(
      new Date("2023-09-13"),
      {
        "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
      },
      true,
    );
  },
  rootComponents: [
    HeroHitokoto,
    Repobeats,
  ],
});
