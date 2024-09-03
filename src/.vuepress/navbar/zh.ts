import {navbar} from "vuepress-theme-hope";


export const zhNavbar = navbar([
  "/",
  {
    text: "随笔文章",
    icon: "signature",
    children: [
      {
        text: "文章列表",
        prefix: "/posts/",
        children: [
          {text: "2024-09", icon: "book-bookmark", link: "2024-09/"},
          {text: "2023-09", icon: "book-bookmark", link: "2023-09/"},
        ]
      },
    ],
  },
  {
    text: "论文",
    icon: "book",
    children: [
      {
        text: "论文列表",
        prefix: "/papers/",
        children: [
          {text: "2023-06", icon: "book-bookmark", link: "2023-06/"},
          {text: "2023-05", icon: "book-bookmark", link: "2023-05/"},
        ]
      },
    ],
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
