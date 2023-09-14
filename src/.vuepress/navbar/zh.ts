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
  {
    text: "友链",
    icon: "mars-double",
    children: [
      {
        text: "一些大佬",
        children: [
          {
            text: "zxysilent",
            link: "https://blog.zxysilent.com"
          },
          {
            text: "mahomaster",
            link: "http://www.mahomaster.com/"
          },
        ]
      },
      {
        text: "另一些大佬",
        children: [
          {
            text: "...",
            link: "#"
          },
        ]
      },
    ],
  },
]);
