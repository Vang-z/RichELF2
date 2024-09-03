import {defineUserConfig} from "vuepress";
import {docsearchPlugin} from "@vuepress/plugin-docsearch";
import {seoPlugin} from "@vuepress/plugin-seo";
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
    docsearchPlugin({
      indexName: "richelf",
      appId: "D1I24X3QU5",
      apiKey: "e07a6fba4e90a4ba67a5bd881b980f3d",
      locales: {
        "/": {
          placeholder: "搜索内容",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
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
