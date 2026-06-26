import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { PreMarrigeView } from "src/sections/course/view/pre-marriage-view";

export const metadata: Metadata = {
  title: "Pre-Marraige",
  description: "Deepayan Foundation's Pre-Marriage course prepares couples for married life through guidance on communication, conflict resolution, emotional well-being, and financial planning.",
  alternates: {
    canonical: '/courses/pre-marriage',
  },
  openGraph: {
    title: "Pre-Marraige – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Pre-Marriage course prepares couples for married life through guidance on communication, conflict resolution, emotional well-being, and financial planning.",
    url: "https://www.deepayan.org/courses/pre-marriage",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Pre-Marraige – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Pre-Marriage course prepares couples for married life through guidance on communication, conflict resolution, emotional well-being, and financial planning.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function PreMarraigePage() {
  return <PreMarrigeView />;
}
