'use client';

import sideImage from '@/public/assets/uploads/qurbani/bannerboy-1000x1024.jpg';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { qurbaniImages } from '../qurbani';

export function QurbaniView() {
  const { t } = useTranslate('project');

  return (
    <CommonView
      images={qurbaniImages}
      sectionDescription={t('qurbaniDescription')}
      sideImage={sideImage}
      sectiontitle={t('qurbaniTitle')}
    />
  );
}
