import {defineClientConfig} from "vuepress/client";
import {defineAsyncComponent} from "vue";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));
const HeroHitokoto = defineAsyncComponent(() => import("./components/HeroHitokoto.vue"));
const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
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
    Navbar,
    Repobeats,
  ],
});
