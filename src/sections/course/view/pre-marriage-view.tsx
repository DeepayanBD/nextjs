'use client';

import sideImage from '@/public/assets/uploads/projects/arraggya/side-image.jpeg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { preMarrigeImages } from '../pre-marriage';

export function PreMarrigeView() {
    const { t } = useTranslate('course/pre-marriage');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Pre-Marriage" }}
            sectionDescription={t('description')}

            slotProps={{
                imageGrid: { images: preMarrigeImages },
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
                        { name: 'Pre-Marriage' },
                    ]
                },
            }}
        />
    );
}
