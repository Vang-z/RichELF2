import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [],
  "/posts/": [
    {
      text: "文章",
      icon: "book",
      collapsible: true,
      prefix: "/posts/",
      children: [
        {
          text: "2023-09",
          icon: "book-bookmark",
          collapsible: true,
          prefix: "2023-09/",
          children: [
            "2.md",
            "1.md",
          ]
        },
      ]
    },
  ]
});
