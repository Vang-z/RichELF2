import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {viteBundler} from "@vuepress/bundler-vite";
import {baiduSeoPlugin} from "vuepress-plugin-baidu-seo-next";
import {umamiAnalyticsPlugin} from "@vuepress/plugin-umami-analytics";


export default defineUserConfig({
  base: "/",
  title: "richelf.tech",
  locales: {
    "/": {
      lang: "zh-CN",
    },
    "/en/": {
      lang: "en-US",
    },
  },
  theme,
  plugins: [
    baiduSeoPlugin({
      hm: 'bbd5f6f130839de3c0ceea673b20b9f2',
      ignoreLocal: true
    }),
    umamiAnalyticsPlugin({
      id: 'a194e8ee-8386-4f31-b928-480ab621e2f4',
      link: 'https://cloud.umami.is/script.js',
      autoTrack: true,
      cache: true,
      hostUrl: 'https://cloud.umami.is/',
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
