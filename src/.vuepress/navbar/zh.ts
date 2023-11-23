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
    text: "发布文章",
    icon: "signature",
    link: "https://github.com/Vang-z/RichELF2/pulls"
  },
  {
    text: "友情链接",
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
            text: "TNT文库",
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
