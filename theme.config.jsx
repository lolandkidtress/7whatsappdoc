export default {
  logo: <span>7WhatsApp</span>,
  project: {
    link: "https://github.com/lolandkidtress/7whatsapp-lib/blob/main/latest/7-whatsapp-win32-x64-latest.exe",
  },
  // 基础 SEO 配置
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
    text: `© ${new Date().getFullYear()} 7WhatsApp. All Rights Reserved.`,
  },
  // 主题颜色配置
  primaryHue: 204,
  // 禁用反馈和编辑链接
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
};
