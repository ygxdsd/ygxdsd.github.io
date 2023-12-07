import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/code",
  {
    text:"博客文章",
    link:"blog",
    icon:"book"
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  }
  
]);
