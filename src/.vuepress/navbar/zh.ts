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
  {
    text: "访客",
    icon: "globe",
    link: "https://cloud.umami.is/share/Zy7rWlWnoVVRIa60/richelf.tech",
  },
]);
