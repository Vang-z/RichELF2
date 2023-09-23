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
            "0f87cd80-8c23-c2dd-40f3-e1d2df83c2f7.md",
            "508e34eb-19f7-171d-5681-1b78e39b8274.md",
          ]
        },
      ]
    },
  ]
});
