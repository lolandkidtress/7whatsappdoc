export default {
  logo: <span>7WhatsApp</span>,
  project: {
    link: "https://github.com/lolandkidtress/7whatsapp-lib/blob/main/latest/7-whatsapp-win32-x64-latest.exe",
  },
  // 基础配置
  useNextSeoProps() {
    return {
      titleTemplate: "%s – 7WhatsApp",
    };
  },
  // 页眉配置
  head: (
    <>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
    </>
  ),
  // 导航配置
  navigation: true,
  // 页脚配置
  footer: {
    text: `${new Date().getFullYear()} © 7WhatsApp.All Rights Reserved.`,
  },
  // 主题配置
  primaryHue: {
    dark: 204,
    light: 204,
  },
  // 禁用反馈链接
  feedback: {
    content: null,
  },
  // 禁用编辑链接
  editLink: {
    component: null,
  },
};
