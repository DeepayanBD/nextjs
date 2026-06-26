'use client';

import sideImage from '@/public/assets/uploads/projects/education-for-a-better-tomorrow/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { foodImages } from '../food-distribution';

export function EducationForBetterTomorrow() {
    const { t } = useTranslate('project/education-for-a-better-tomorrow');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Education For A Better Tomorrow" }}
            sectionDescription={t('description')}

            slotProps={{
                imageGrid: { images: foodImages },
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
                        { name: 'Education For A Better Tomorrow' },
                    ]
                },
            }}
        />
    );
}
