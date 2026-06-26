'use client';

import sideImage from '@/public/assets/uploads/courses/internship/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { internshipImages } from '../internship';

export function InternshipView() {
  const { t } = useTranslate('course/internship');

  return (
    <CommonView
      sideImage={{ src: sideImage, alt: "Internship" }}
      sectionDescription={t('description')}

      slotProps={{
        imageGrid: { images: internshipImages },
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
            { name: 'Internship' },
          ]
        },
      }}
    />
  );
}
