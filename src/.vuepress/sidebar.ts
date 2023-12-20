import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/blog": [
    "/",
    "/intro"
  ],
  "/code":[
    {
      text:"JavaWeb核心",
      link:"JavaWeb.md",
      icon:"file"
    },
    {
      text:"Spirng框架学习",
      link:"Spring.md",
      icon:"file"
    },
  ],
  "/intro":[
    "/"
  ]
});
