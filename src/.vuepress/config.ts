import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {viteBundler} from "@vuepress/bundler-vite";
import {baiduSeoPlugin} from "vuepress-plugin-baidu-seo-next";


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
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
