'use client';

import sideImage from '@/public/assets/uploads/projects/qurbani/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { foodImages } from '../food-distribution';

export function FoodView() {
    const { t } = useTranslate('project');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Food Distribution" }}
            sectionDescription={t('foodDescription')}

            slotProps={{
                imageGrid: { images: foodImages },
                breadcrumbs: {
                    heading: t('foodTitle'),
                    links: [
                        {
                            name: 'Home',
                            href: '/',
                        },
                        {
                            name: 'Projects',
                            href: paths.projects.root,
                        },
                        { name: 'Food Distribution' },
                    ]
                },
            }}
        />
    );
}
