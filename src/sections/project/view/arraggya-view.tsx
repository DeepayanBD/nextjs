'use client';

import sideImage from '@/public/assets/uploads/projects/arraggya/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { arraggyaImages } from '../arraggya';

export function ArraggyaView() {
  const { t } = useTranslate('project');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Arraggya" }}
      sectionDescription={t('arraggyaDescription')}

      slotProps={{
        imageGrid: { images: arraggyaImages },
        breadcrumbs: {
          heading: t('arraggyaTitle'),
          links: [
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Projects',
              href: paths.projects.root,
            },
            { name: 'Arraggya' },
          ]
        },
      }}
    />
  );
}

