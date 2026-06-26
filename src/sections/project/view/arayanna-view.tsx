'use client';

import sideImage from '@/public/assets/uploads/projects/arayanna/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { arraggyaImages } from '../arraggya';

export function ArayannaView() {
  const { t } = useTranslate('project/arayanna');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Arayanna" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: arraggyaImages },
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
            { name: 'Arayanna' },
          ]
        },
      }}
    />
  );
}

