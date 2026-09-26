import type {Config} from '@docusaurus/types';

// 言語ごとのサイト名と説明。既定（ja）以外は DOCUSAURUS_CURRENT_LOCALE で選ぶ
const siteText: Record<string, {title: string; tagline: string}> = {
  ja: {title: 'VOrbit ASMR 操作ガイド', tagline: '導入からトラッキング、空間音響の設定まで'},
  en: {title: 'VOrbit ASMR User Guide', tagline: 'Setup, tracking, and spatial audio'},
  'zh-Hans': {title: 'VOrbit ASMR 使用指南', tagline: '从安装到追踪与空间音频设置'},
  'zh-Hant': {title: 'VOrbit ASMR 使用指南', tagline: '從安裝到追蹤與空間音訊設定'},
  ko: {title: 'VOrbit ASMR 사용 가이드', tagline: '설치부터 트래킹, 공간 음향 설정까지'},
  ru: {title: 'Руководство VOrbit ASMR', tagline: 'Установка, трекинг и пространственный звук'},
  es: {title: 'Guía de VOrbit ASMR', tagline: 'Instalación, seguimiento y audio espacial'},
  'pt-BR': {title: 'Guia do VOrbit ASMR', tagline: 'Instalação, rastreamento e áudio espacial'},
};
const text = siteText[process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'ja'] ?? siteText.ja;

const config: Config = {
  title: text.title,
  tagline: text.tagline,
  favicon: 'img/favicon.svg',
  url: 'https://feathvr.github.io',
  baseUrl: '/VOrbit-ASMR-Docs/',
  organizationName: 'feathVR',
  projectName: 'VOrbit-ASMR-Docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh-Hans', 'zh-Hant', 'ko', 'ru', 'es', 'pt-BR'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-CN'},
      'zh-Hant': {label: '繁體中文', htmlLang: 'zh-TW'},
      ko: {label: '한국어', htmlLang: 'ko-KR'},
      ru: {label: 'Русский', htmlLang: 'ru-RU'},
      es: {label: 'Español', htmlLang: 'es'},
      'pt-BR': {label: 'Português (Brasil)', htmlLang: 'pt-BR'},
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
        {href: 'https://discord.gg/MJmu7Shger', label: 'Discord', position: 'right'},
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
            {label: 'Discord', href: 'https://discord.gg/MJmu7Shger'},
            {label: 'GitHub', href: 'https://github.com/feathVR/VOrbit-ASMR-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} feathVR`,
    },
  },
};

export default config;
