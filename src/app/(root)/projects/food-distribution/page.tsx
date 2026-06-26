import type { Metadata } from 'next';

import deepRec from '@/public/assets/logo/deepayan-logo-rectangular.png';

import { FoodDistributionView } from 'src/sections/project/view/food-distribution-view';

export const metadata: Metadata = {
    title: 'Food Distribution',
    description:
        "Deepayan Foundation's Food Distribution program fights hunger by providing nutritious meals and essential food supplies to vulnerable communities across Bangladesh.",
    alternates: {
        canonical: '/projects/food-distribution',
    },
    openGraph: {
        title: 'Food Distribution – Projects – Deepayan Foundation',
        description:
            "Deepayan Foundation's Food Distribution program fights hunger by providing nutritious meals and essential food supplies to vulnerable communities across Bangladesh.",
        url: 'https://www.deepayan.org/projects/food-distribution',
        images: [
            {
                url: deepRec.src,
                height: 301,
                alt: 'Deepayan Foundation Logo',
            },
        ],
    },
    twitter: {
        title: 'Food Distribution – Projects – Deepayan Foundation',
        description:
            "Deepayan Foundation's Food Distribution program fights hunger by providing nutritious meals and essential food supplies to vulnerable communities across Bangladesh.",
        card: 'summary_large_image',
        images: [deepRec.src],
    },
};

export default function FoodPage() {
    return <FoodDistributionView />;
}
