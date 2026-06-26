import type { Metadata } from 'next';

import deepRec from '@/public/assets/logo/deepayan-logo-rectangular.png';

import { ArraggyaView } from 'src/sections/project/view/arraggya-view';

export const metadata: Metadata = {
  title: 'Arraggya',
  description:
    'Deepayan is working to ensure healthcare for all through trained health workers, compassionate doctors, and the future Deepayan Aroggya Clinic, bringing hope and free medical care to underprivileged communities.',
  alternates: {
    canonical: '/projects/arraggya',
  },
  openGraph: {
    title: 'Arraggya – Projects – Deepayan Foundation',
    description:
      'Deepayan is working to ensure healthcare for all through trained health workers, compassionate doctors, and the future Deepayan Aroggya Clinic, bringing hope and free medical care to underprivileged communities.',
    url: 'https://www.deepayan.org/projects/arraggya',
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: 'Deepayan Foundation Logo',
      },
    ],
  },
  twitter: {
    title: 'Arraggya – Projects – Deepayan Foundation',
    description:
      'Deepayan is working to ensure healthcare for all through trained health workers, compassionate doctors, and the future Deepayan Aroggya Clinic, bringing hope and free medical care to underprivileged communities.',
    card: 'summary_large_image',
    images: [deepRec.src],
  },
};

export default function ArraggyaPage() {
  return <ArraggyaView />;
}
