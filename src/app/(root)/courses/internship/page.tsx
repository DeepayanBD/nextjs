import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { UnderMaintenanceView } from "src/sections/view/under-maintenance-view";

export const metadata: Metadata = {
  title: "Internship",
  alternates: {
    canonical: '/courses/internship',
  },
  openGraph: {
    title: "Internship – Course – Deepayan Foundation",
    url: "https://www.deepayan.org/course/internship",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Internship – Course – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function InternshipPage() {
  return <UnderMaintenanceView />;
}
