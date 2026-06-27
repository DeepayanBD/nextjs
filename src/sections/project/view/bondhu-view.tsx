'use client';

import sideImage from '@/public/assets/uploads/projects/bondhu/side-image.webp';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { bondhuImages } from '../bondhu';

export function BondhuView() {
    const { t } = useTranslate('project/bondhu');

    return (
        <CommonView
            sideImage={{ src: sideImage, alt: "Bondhu" }}
            sectionDescription={t('description')}

            slotProps={{
                imageGrid: { images: bondhuImages },
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
                        { name: 'Bondhu' },
                    ]
                },
            }}
        />
    );
}
