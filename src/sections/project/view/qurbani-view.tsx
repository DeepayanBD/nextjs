'use client';

import sideImage from '@/public/assets/uploads/projects/qurbani/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { qurbaniImages } from '../qurbani';

export function QurbaniView() {
  const { t } = useTranslate('project');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Qurbani" }}
      sectionDescription={t('qurbaniDescription')}

      slotProps={{
        imageGrid: { images: qurbaniImages },
        breadcrumbs: {
          heading: t('qurbaniTitle'),
          links: [
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Projects',
              href: paths.projects.root,
            },
            { name: 'Qurbani' },
          ]
        },
      }}
    />
  );
}
