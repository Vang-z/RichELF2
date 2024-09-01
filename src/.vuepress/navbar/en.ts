import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Essay",
    icon: "signature",
    children: [
      {
        text: "Essay List",
        prefix: "/en/posts/",
        children: [
          "2023-09/",
        ]
      },
    ],
  },
  {
    text: "Paper",
    icon: "book",
    children: [
      {
        text: "Paper List",
        prefix: "/en/papers/",
        children: [
          "2023-06/",
          "2023-05/",
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
