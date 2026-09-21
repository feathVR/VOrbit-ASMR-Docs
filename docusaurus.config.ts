import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'VOrbit ASMR Documentation',
  tagline: 'User guide for spatial voice tracking',
  favicon: 'img/favicon.svg',
  url: 'https://feathvr.github.io',
  baseUrl: '/VOrbit-ASMR-Docs/',
  organizationName: 'feathVR',
  projectName: 'VOrbit-ASMR-Docs',
  onBrokenLinks: 'throw',
  presets: [
    [
      'classic',
      {
        docs: {sidebarPath: './sidebars.ts'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],
};

export default config;
