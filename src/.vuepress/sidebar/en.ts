import {sidebar} from "vuepress-theme-hope";


export const enSidebar = sidebar({
  "/en/": [],
  "/en/posts/": [
    {
      text: "Essay",
      icon: "signature",
      collapsible: true,
      prefix: "/en/posts/",
      children: [
        {
          text: "2024-09",
          icon: "book-bookmark",
          collapsible: true,
          prefix: "2024-09/",
          children: [
            "26701f79-3a4d-43e6-930b-02bc77711421.md",
          ]
        },
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
  "/en/papers/": [
    {
      text: "Paper",
      icon: "book",
      collapsible: true,
      prefix: "/en/papers/",
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
