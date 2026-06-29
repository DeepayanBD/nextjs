import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { ProjectView } from "src/sections/project/view/project-view";

export const metadata: Metadata = {
    description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: "Projects – Deepayan Foundation",
        description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
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
        description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
        card: "summary_large_image",
        images: [deepRec.src],
    },
};

export default function ProjectPage() {
    return <ProjectView />;
}