'use client';

import sideImage from '@/public/assets/uploads/projects/ashram/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { ashramImages } from '../ashram';

export function AshramView() {
  const { t } = useTranslate('project/ashram');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Ashram" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: ashramImages },
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
            { name: 'Ashram' },
          ]
        },
      }}
    />
  );
}

