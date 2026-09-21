import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'VOrbit ASMR 操作ガイド',
  tagline: '導入からトラッキング、空間音響の設定まで',
  favicon: 'img/favicon.svg',
  url: 'https://feathvr.github.io',
  baseUrl: '/VOrbit-ASMR-Docs/',
  organizationName: 'feathVR',
  projectName: 'VOrbit-ASMR-Docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    localeConfigs: {ja: {label: '日本語', htmlLang: 'ja-JP'}},
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/feathVR/VOrbit-ASMR-Docs/edit/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'VOrbit ASMR',
      logo: {alt: 'VOrbit ASMR', src: 'img/favicon.svg'},
      items: [
        {to: '/', label: '操作ガイド', position: 'left'},
        {to: '/troubleshooting/common-issues', label: '困ったとき', position: 'left'},
        {href: 'https://github.com/feathVR/VOrbit-ASMR-Docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ガイド',
          items: [
            {label: 'はじめに', to: '/'},
            {label: 'トラッキング', to: '/tracking/overview'},
            {label: 'トラブルシューティング', to: '/troubleshooting/common-issues'},
          ],
        },
        {
          title: 'このサイトについて',
          items: [
            {label: 'GitHub', href: 'https://github.com/feathVR/VOrbit-ASMR-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} feathVR`,
    },
  },
};

export default config;
