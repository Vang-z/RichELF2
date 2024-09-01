import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [],
  "/posts/": [
    {
      text: "随笔文章",
      icon: "signature",
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
  ],
  "/papers/": [
    {
      text: "论文",
      icon: "book",
      collapsible: true,
      prefix: "/papers/",
      children: [
        {
          text: "2023-06",
          icon: "book-bookmark",
          collapsible: true,
          prefix: "2023-06/",
          children: [
            "2a4f288d-97f0-475c-9583-c65fa6ceee2e.md",
          ]
        },
        {
          text: "2023-05",
          icon: "book-bookmark",
          collapsible: true,
          prefix: "2023-05/",
          children: [
            "76053f16-593f-4431-83ed-9d52960c5e0d.md",
          ]
        },
      ]
    },
  ]
});
