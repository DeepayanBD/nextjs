'use client';

import sideImage from '@/public/assets/uploads/projects/arayanna/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { arayannaImages } from '../arayanna';

export function ArayannaView() {
  const { t } = useTranslate('project/arayanna');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Arayanna" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: arayannaImages },
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

