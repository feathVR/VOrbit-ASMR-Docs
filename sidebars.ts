import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'はじめに',
      items: ['getting-started/first-sound'],
    },
    {
      type: 'category',
      label: 'トラッキング',
      items: ['tracking/overview', 'tracking/calibration'],
    },
    {
      type: 'category',
      label: '空間音響',
      items: ['spatial/overview'],
    },
    {
      type: 'category',
      label: '困ったとき',
      items: ['troubleshooting/common-issues'],
    },
    'faq',
  ],
};

export default sidebars;
