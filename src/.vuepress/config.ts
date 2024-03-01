import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Rush的博客",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
