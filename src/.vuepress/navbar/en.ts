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
          {text: "2024-09", icon: "book-bookmark", link: "2024-09/"},
          {text: "2023-09", icon: "book-bookmark", link: "2023-09/"},
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
          {text: "2023-06", icon: "book-bookmark", link: "2023-06/"},
          {text: "2023-05", icon: "book-bookmark", link: "2023-05/"},
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
