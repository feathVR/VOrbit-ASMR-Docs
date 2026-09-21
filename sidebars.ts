import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      items: ['getting-started/first-sound'],
    },
    {
      type: 'category',
      label: 'Tracking',
      items: ['tracking/overview', 'tracking/calibration'],
    },
    {
      type: 'category',
      label: 'Spatial audio',
      items: ['spatial/overview'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/common-issues'],
    },
  ],
};

export default sidebars;

