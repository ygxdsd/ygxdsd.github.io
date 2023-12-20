import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text:"代码笔记",
    link:"code",
    icon:"code"
  },
  {
    text:"博客文章",
    link:"blog",
    icon:"blog"
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  }
  
]);
