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
    text: "Publish",
    icon: "signature",
    link: "https://github.com/Vang-z/RichELF2/pulls"
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
      {
        text: "Other Big Shots",
        children: [
          {
            text: "TNT Lib",
            link: "http://38.6.177.226:3310/"
          },
          {
            text: "gisyang",
            link: "http://gisyang.xyz/"
          },
        ]
      },
    ],
  },
]);
