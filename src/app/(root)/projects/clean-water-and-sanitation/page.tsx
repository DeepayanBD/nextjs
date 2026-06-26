import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { CleanWaterSanitationView } from "src/sections/project/view/clean-water-sanitation-view";

export const metadata: Metadata = {
  title: "Clean Water And Sanitation",
  description: "Deepayan Foundation provides safe drinking water and sanitation facilities to vulnerable communities, promoting hygiene, preventing disease, and improving lives across Bangladesh.",
  alternates: {
    canonical: '/projects/clean-water-and-sanitation',
  },
  openGraph: {
    title: "Clean Water And Sanitation – Projects – Deepayan Foundation",
    description: "Deepayan Foundation provides safe drinking water and sanitation facilities to vulnerable communities, promoting hygiene, preventing disease, and improving lives across Bangladesh.",
    url: "https://www.deepayan.org/projects/clean-water-and-sanitation",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Clean Water And Sanitation – Projects – Deepayan Foundation",
    description: "Deepayan Foundation provides safe drinking water and sanitation facilities to vulnerable communities, promoting hygiene, preventing disease, and improving lives across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <CleanWaterSanitationView />;
}
