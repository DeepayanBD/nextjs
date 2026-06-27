'use client';

import sideImage from '@/public/assets/uploads/courses/smart-parenting/side-image.webp';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { smartParentingImages } from '../smart-parenting';

export function SmartParentingView() {
  const { t } = useTranslate('course/smart-parenting');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Smart Parenting" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: smartParentingImages },
        breadcrumbs: {
          heading: t('title'),
          links: [
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Courses',
              href: paths.courses.root,
            },
            { name: 'Smart Parenting' },
          ]
        },
      }}
    />
  );
}
