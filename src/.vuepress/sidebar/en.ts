import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [],
  "/en/posts/": [
    {
      text: "Article",
      icon: "book",
      collapsible: true,
      prefix: "/en/posts/",
      children: [
        {
          text: "2023-09",
          icon: "book-bookmark",
          collapsible: true,
          prefix: "2023-09/",
          children: [
            "508e34eb-19f7-171d-5681-1b78e39b8274.md",
          ]
        },
      ]
    },
  ]
});
