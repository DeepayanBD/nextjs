'use client';

import sideImage from '@/public/assets/uploads/qurbani/bannerboy-1000x1024.jpg';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { foodImages } from '../food';

export default function FoodView() {
    const { t } = useTranslate('project');

    return (
        <CommonView
            images={foodImages}
            sectionDescription={t('foodDescription')}
            sideImage={sideImage}
            sectiontitle={t('foodTitle')}
        />
    );
}
