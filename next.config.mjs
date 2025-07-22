import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  // 如果遇到验证问题，可以取消下面这行的注释来禁用验证
  // defaultShowCopyCode: true,
});

export default withNextra({
  // 禁用严格模式可能解决一些验证问题
  reactStrictMode: false,
});
