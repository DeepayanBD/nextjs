import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { CourseView } from "src/sections/course/view/course-view";

export const metadata: Metadata = {
    description: "Empower your future with Deepayan Foundation's expert-led courses in internship, pre-marriage, and smart parenting, designed to build skills, strengthen families, and create positive social impact.",
    alternates: {
        canonical: '/courses',
    },
    openGraph: {
        title: "Courses – Deepayan Foundation",
        description: "Empower your future with Deepayan Foundation's expert-led courses in internship, pre-marriage, and smart parenting, designed to build skills, strengthen families, and create positive social impact.",
        url: "https://www.deepayan.org/courses",
        images: [
            {
                url: deepRec.src,
                height: 301,
                alt: "Deepayan Foundation Logo",
            },
        ],
    },
    twitter: {
        title: "Courses – Deepayan Foundation",
        description: "Empower your future with Deepayan Foundation's expert-led courses in internship, pre-marriage, and smart parenting, designed to build skills, strengthen families, and create positive social impact.",
        card: "summary_large_image",
        images: [deepRec.src],
    },
};
export default function CoursePage() {
    return <CourseView />;
}