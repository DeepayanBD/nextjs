'use client';

import sideImage from '@/public/assets/uploads/projects/qurbani/side-image.jpg';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { foodImages } from '../food-distribution';

export function CleanWaterSanitationView() {
    const { t } = useTranslate('project/clean-water-sanitation');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Clean Water and Sanitation" }}
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
                        { name: 'Clean Water and Sanitation' },
                    ]
                },
            }}
        />
    );
}
