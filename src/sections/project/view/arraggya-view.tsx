'use client';

import sideImage from '@/public/assets/uploads/arraggya/side-image.jpeg';

import { useTranslate } from 'src/locales';

import { CommonView } from 'src/sections/components/common-view';

import { arraggyaImages } from '../arraggya';

export default function ArraggyaView() {
  const { t } = useTranslate('project');

  return (
    <CommonView
      images={arraggyaImages}
      sectionDescription={t('arraggyaDescription')}
      sideImage={sideImage}
      sectiontitle={t('arraggyaTitle')}
    />
  );
}
