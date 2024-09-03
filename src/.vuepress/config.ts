import {defineUserConfig} from "vuepress";
import {docsearchPlugin} from "@vuepress/plugin-docsearch"
import {seoPlugin} from "@vuepress/plugin-seo"
import theme from "./theme.js";


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
    docsearchPlugin({
      indexName: "richelf",
      appId: "D1I24X3QU5",
      apiKey: "e07a6fba4e90a4ba67a5bd881b980f3d",
    }),
    seoPlugin({
      hostname: 'richelf.tech',
      author: {
        name: 'Vang-z',
        url: 'richelf.tech',
        email: 'vang-z@foxmail.com',
      },
      autoDescription: true,
    }),
  ]
});
