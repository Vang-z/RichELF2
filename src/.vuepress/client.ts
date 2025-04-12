import {defineClientConfig} from "vuepress/client";
import {defineAsyncComponent, onMounted} from "vue";
import {inject} from "@vercel/analytics";
import {injectSpeedInsights} from "@vercel/speed-insights";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import Sponsor from "./components/Sponsor.vue";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));
const HeroHitokoto = defineAsyncComponent(() => import("./components/HeroHitokoto.vue"));
// const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
const Repobeats = defineAsyncComponent(() => import("./components/Repobeats.vue"));

export default defineClientConfig({
  setup() {
    inject();
    injectSpeedInsights();
    if (typeof document !== 'undefined') {
      document.oncontextmenu = function (_) {
        return false;
      };
    }
    onMounted(() => {
      setTimeout(() => {
        console.clear();
        console.log(
          `%c ✨vang-z的博客✨ %c ✨v2.0.0✨ %c\n
  - 给机器以生命，给岁月以文明。\n
    - ( ゜- ゜)つロ 乾杯~🍻\n`,
          `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
          `background: #030307; padding:5px; font-size:12px; color:#fff;`,
          `color: #51c4d3; font-size:12px;`
        );
      }, 3000);
    });
  },
  rootComponents: [
    FooterRunTime,
    HeroHitokoto,
    // Navbar,
    Repobeats,
  ],
  enhance: ({ app, router, siteData }) => {
    app.component("Sponsor", Sponsor);
  },
});
