import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {redirectPlugin} from "vuepress-plugin-redirect";
// import {removeHtmlExtensionPlugin} from "vuepress-plugin-remove-html-extension"
import theme from "./theme";

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
    searchProPlugin({
      indexContent: true,
      hotKeys: [{key: "f", ctrl: true}],
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类: $content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签: $content",
        },
      ],
    }),
    redirectPlugin({
      config: {},
    }),
    // 目前会导致阅读量记录失效
    // removeHtmlExtensionPlugin(),
  ],
});
