import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { FoodView } from "src/sections/project/view/food-view";

export const metadata: Metadata = {
    title: "Food Distribution",
    alternates: {
        canonical: '/projects/food-distribution',
    },
    openGraph: {
        title: "Food Distribution – Project – Deepayan Foundation",
        url: "https://www.deepayan.org/projects/food-distribution",
        images: [
            {
                url: deepRec.src,
                height: 301,
                alt: "Deepayan Foundation Logo",
            },
        ],
    },
    twitter: {
        title: "Food Distribution – Project – Deepayan Foundation",
        card: "summary_large_image",
        images: [deepRec.src],
    },
};

export default function FoodPage() {
    return <FoodView />;
}
