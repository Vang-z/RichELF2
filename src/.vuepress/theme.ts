import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";


export default hopeTheme({
  hostname: "https://richelf.tech",
  author: {
    name: " ",
  },
  iconAssets: "fontawesome",
  repo: "https://github.com/Vang-z/RichELF2",
  docsDir: "src",
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
        "POWERED BY&nbsp;" +
        "<a href='https://theme-hope.vuejs.press/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%; top: 1px;' src='/assets/images/theme-hope.svg' alt=''>" +
        "</a>" +
        "&nbsp;" +
        "<a href='https://vercel.com/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%' src='/assets/images/vercel.png' alt=''>" +
        "</a>" +
        "&nbsp;&&nbsp;" +
        "<a href='https://waline.js.org/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%' src='/assets/images/waline.png' alt=''>" +
        "</a>" +
        "</div>",
      copyright: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
        "COPYRIGHT <div style='position: relative; font-family: Flexo, serif; top: 1px'>&nbsp;©&nbsp;</div>" +
        "2023 Vang-z. ALL RIGHTS RESERVED." +
        "</div>",
      displayFooter: true,
      blog: {
        avatar: "",
        description: `<p style="text-align: left; font-size: 1.4rem; hyphens: auto; margin: 0;"><strong>关于我</strong></p>
<p style="text-align: left; text-indent: 2rem;">现阶段正在<a href="https://www.ouc.edu.cn/">中国海洋大学</a>攻读博士研究生学位, 研究领域为计算机视觉与海洋科学的交叉领域.</p>
<p style="text-align: left; text-indent: 2rem;">2020年于<a href="https://www.cwnu.edu.cn/">西华师范大学</a>取得信息与计算科学理学学士学位, 
2024年于<a href="https://www.gxmzu.edu.cn/">广西民族大学</a>取得计算机科学与技术工学硕士学位.</p>
`
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
        "POWERED BY&nbsp;" +
        "<a href='https://theme-hope.vuejs.press/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%; top: 1px;' src='/assets/images/theme-hope.svg' alt=''>" +
        "</a>" +
        "&nbsp;" +
        "<a href='https://vercel.com/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%' src='/assets/images/vercel.png' alt=''>" +
        "</a>" +
        "&nbsp;&&nbsp;" +
        "<a href='https://waline.js.org/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
        "<img style='width: 100%; height: 100%' src='https://waline.js.org/logo.png' alt=''>" +
        "</a>" +
        "</div>",
      copyright: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
        "COPYRIGHT <div style='position: relative; font-family: Flexo, serif; top: 1px'>&nbsp;©&nbsp;</div>" +
        "2023 Vang-z. ALL RIGHTS RESERVED." +
        "</div>",
      displayFooter: true,
      blog: {
        avatar: "",
        description: `<p style="text-align: left; font-size: 1.4rem; hyphens: auto; margin: 0;"><strong>About Me</strong></p>
<p style="text-align: left; text-indent: 2em; hyphens: auto;">I am currently pursuing a PhD at <a href="https://www.ouc.edu.cn/">Ocean University of China</a>, specializing in the interdisciplinary field of computer vision and marine science.</p>
<p style="text-align: left; text-indent: 2em; hyphens: auto;"">I obtained my Bachelor of Science in Information and Computing Science from <a href="https://www.cwnu.edu.cn/">China West Normal University</a> in 2020, and my Master of Engineering in Computer Science and Technology from <a href="https://www.gxmzu.edu.cn/">Guangxi Minzu University</a> in 2024.</p>
`,
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },
  darkmode: "enable",
  themeColor: true,
  print: false,
  hotReload: true,
  plugins: {
    blog: {
      excerptLength: 0,
    },
    comment: {
      // @ts-ignore
      provider: "Waline",
      serverURL: "https://waline-drab-seven.vercel.app/",
      search: false,
      meta: ["nick", "mail"],
      requiredMeta: ["nick"],
      emoji: [
        "/assets/emoji/bmoji",
        "/assets/emoji/bilibili",
        "/assets/emoji/tieba",
        "/assets/emoji/alus",
        "/assets/emoji/soul-emoji",
      ]
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      card: true,
    },
  },
});
