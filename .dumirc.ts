import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    // 单语言时配置数组即可
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
      { title: '平台', link: '/platform' },
    ],
    name: 'Meshed Cloud',
    logo: 'https://s.meshed.cn/meshed/svg/logo.svg',
    socialLinks: {
      github: 'https://github.com/meshed-cloud',
    },
    footer: "Copyright © 2023 <a href=\"https://github.com/meshed-cloud\" target=\"_blank\" rel=\"noreferrer\">Meshed Cloud</a> | <a href=\"http://beian.miit.gov.cn\" target=\"_blank\">闽ICP备2022013338号-1</a>"
  },
  favicons: ['https://s.meshed.cn/meshed/ico/favicon.ico'],
});
