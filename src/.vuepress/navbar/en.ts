import {navbar} from "vuepress-theme-hope";


export const enNavbar = navbar([
  "/en/",
  {
    text: "Essay",
    icon: "signature",
    link: "/en/posts/",
  },
  {
    text: "Paper",
    icon: "book",
    link: "/en/papers/",
  },
  {
    text: "Friendships",
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
