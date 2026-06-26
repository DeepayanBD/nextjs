'use client';

import sideImage from '@/public/assets/uploads/projects/qurbani/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { foodImages } from '../food-distribution';

export function FoodDistributionView() {
    const { t } = useTranslate('project/food-distribution');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Food Distribution" }}
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
                        { name: 'Food Distribution' },
                    ]
                },
            }}
        />
    );
}
