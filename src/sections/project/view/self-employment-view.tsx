'use client';

import sideImage from '@/public/assets/uploads/projects/self-employment/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { selfEmploymentImages } from '../self-employment';


export function SelfEmploymentView() {
  const { t } = useTranslate('project/self-employment');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Self Employment" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: selfEmploymentImages },
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
            { name: 'Self Employment' },
          ]
        },
      }}
    />
  );
}

