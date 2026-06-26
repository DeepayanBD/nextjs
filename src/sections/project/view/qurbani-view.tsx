'use client';

import sideImage from '@/public/assets/uploads/projects/qurbani/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { qurbaniImages } from '../qurbani';

export function QurbaniView() {
  const { t } = useTranslate('project/qurbani');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Qurbani" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: qurbaniImages },
        breadcrumbs: {
          heading: t('title'),
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
