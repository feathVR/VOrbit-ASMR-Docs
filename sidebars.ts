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
      label: '音声経路',
      items: ['audio/routes', 'audio/vst-bridge', 'audio/noise-suppression'],
    },
    {
      type: 'category',
      label: 'トラッキング',
      items: ['tracking/overview', 'tracking/calibration'],
    },
    {
      type: 'category',
      label: '空間音響',
      items: ['spatial/overview', 'spatial/sound'],
    },
    {
      type: 'category',
      label: '配信とコラボ',
      items: ['streaming/obs', 'collab/call'],
    },
    {
      type: 'category',
      label: 'そのほかの機能',
      items: ['features/other'],
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
