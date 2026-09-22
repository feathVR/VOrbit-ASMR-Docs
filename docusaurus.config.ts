import type {Config} from '@docusaurus/types';

const config: Config = {
  title: process.env.DOCUSAURUS_CURRENT_LOCALE === 'en'
    ? 'VOrbit ASMR User Guide'
    : 'VOrbit ASMR 操作ガイド',
  tagline: process.env.DOCUSAURUS_CURRENT_LOCALE === 'en'
    ? 'Setup, tracking, and spatial audio'
    : '導入からトラッキング、空間音響の設定まで',
  favicon: 'img/favicon.svg',
  url: 'https://feathvr.github.io',
  baseUrl: '/VOrbit-ASMR-Docs/',
  organizationName: 'feathVR',
  projectName: 'VOrbit-ASMR-Docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
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
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://store.steampowered.com/app/5173840/', label: 'Steam', position: 'right'},
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
            {label: 'Steam', href: 'https://store.steampowered.com/app/5173840/'},
            {label: 'GitHub', href: 'https://github.com/feathVR/VOrbit-ASMR-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} feathVR`,
    },
  },
};

export default config;
