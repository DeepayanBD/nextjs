'use client';

import sideImage from '@/public/assets/uploads/projects/clean-water-and-sanitation/side-image.webp';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { cleanWaterSanitationImages } from '../clean-water-sanitation';

export function CleanWaterSanitationView() {
    const { t } = useTranslate('project/clean-water-and-sanitation');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Clean Water and Sanitation" }}
            sectionDescription={t('description')}

            slotProps={{
                imageGrid: { images: cleanWaterSanitationImages },
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
