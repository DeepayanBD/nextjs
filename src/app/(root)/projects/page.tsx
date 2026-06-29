import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { ProjectView } from "src/sections/project/view/project-view";

export const metadata: Metadata = {
    description: "Explore Deepayan Foundation's community projects focused on healthcare, education, food security, clean water, livelihoods, environmental conservation, and humanitarian support across Bangladesh.",
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: "Projects – Deepayan Foundation",
        description: "Explore Deepayan Foundation's community projects focused on healthcare, education, food security, clean water, livelihoods, environmental conservation, and humanitarian support across Bangladesh.",
        url: "https://www.deepayan.org/projects",
        images: [
            {
                url: deepRec.src,
                height: 301,
                alt: "Deepayan Foundation Logo",
            },
        ],
    },
    twitter: {
        title: "Projects – Deepayan Foundation",
        description: "Explore Deepayan Foundation's community projects focused on healthcare, education, food security, clean water, livelihoods, environmental conservation, and humanitarian support across Bangladesh.",
        card: "summary_large_image",
        images: [deepRec.src],
    },
};

export default function ProjectPage() {
    return <ProjectView />;
}