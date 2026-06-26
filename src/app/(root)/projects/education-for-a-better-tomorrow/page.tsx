import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { EducationForBetterTomorrow } from "src/sections/project/view/education-for-a-better-tomorrow-view";

export const metadata: Metadata = {
  title: "Education For A Better Tomorrow",
  description: "Deepayan Foundation's Education for a Better Tomorrow program expands access to quality education, learning resources, and opportunities for underserved children and youth across Bangladesh.",
  alternates: {
    canonical: '/projects/education-for-a-better-tomorrow',
  },
  openGraph: {
    title: "Education For A Better Tomorrow – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Education for a Better Tomorrow program expands access to quality education, learning resources, and opportunities for underserved children and youth across Bangladesh.",
    url: "https://www.deepayan.org/projects/education-for-a-better-tomorrow",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Education For A Better Tomorrow – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Education for a Better Tomorrow program expands access to quality education, learning resources, and opportunities for underserved children and youth across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <EducationForBetterTomorrow />;
}
