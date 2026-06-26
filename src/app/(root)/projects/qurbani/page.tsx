import type { Metadata } from 'next';

import deepRec from '@/public/assets/logo/deepayan-logo-rectangular.png';

import { QurbaniView } from 'src/sections/project/view/qurbani-view';

export const metadata: Metadata = {
  title: 'Qurbani',
  description:
    "Deepayan's Qurbani initiative provides sacrificial meat to underprivileged families, spreading compassion, dignity, and hope across Bangladesh.",
  alternates: {
    canonical: '/projects/qurbani',
  },
  openGraph: {
    title: 'Qurbani – Projects – Deepayan Foundation',
    description:
      "Deepayan's Qurbani initiative provides sacrificial meat to underprivileged families, spreading compassion, dignity, and hope across Bangladesh.",
    url: 'https://www.deepayan.org/projects/qurbani',
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: 'Deepayan Foundation Logo',
      },
    ],
  },
  twitter: {
    title: 'Qurbani – Projects – Deepayan Foundation',
    description:
      "Deepayan's Qurbani initiative provides sacrificial meat to underprivileged families, spreading compassion, dignity, and hope across Bangladesh.",
    card: 'summary_large_image',
    images: [deepRec.src],
  },
};

export default function QurbaniPage() {
  return <QurbaniView />;
}
