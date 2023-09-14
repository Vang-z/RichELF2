import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文章",
    icon: "book",
    children: [
      {
        text: "文章列表",
        prefix: "/posts/",
        children: [
          "2023-09/",
        ]
      },
    ],
  },
]);
