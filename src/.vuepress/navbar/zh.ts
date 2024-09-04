import {navbar} from "vuepress-theme-hope";


export const zhNavbar = navbar([
  "/",
  {
    text: "随笔文章",
    icon: "signature",
    link: "/posts/",
  },
  {
    text: "论文",
    icon: "book",
    link: "/papers/",
  },
  {
    text: "友情链接",
    icon: "venus-mars",
    link: "/friendships/",
  },
]);
