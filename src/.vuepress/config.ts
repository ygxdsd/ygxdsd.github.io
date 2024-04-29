import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  host: 'localhost', // ip
  port: 9999, //端口号
  lang: "zh-CN",
  title: "Rush的博客",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});

