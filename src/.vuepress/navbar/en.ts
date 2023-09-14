import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Article",
    icon: "book",
    children: [
      {
        text: "List",
        prefix: "/en/posts/",
        children: [
          "2023-09/",
        ]
      },
    ],
  },
  {
    text: "Partner Links",
    icon: "mars-double",
    children: [
      {
        text: "Big Shots",
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
    ],
  },
]);
