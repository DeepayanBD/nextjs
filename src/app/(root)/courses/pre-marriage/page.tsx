import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { UnderMaintenanceView } from "src/sections/view/under-maintenance-view";

export const metadata: Metadata = {
  title: "Pre Marraige",
  alternates: {
    canonical: '/courses/pre-marriage',
  },
  openGraph: {
    title: "Pre Marraige – Course – Deepayan Foundation",
    url: "https://www.deepayan.org/course/pre-marriage",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Pre Marraige – Course – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function PreMarraigePage() {
  return <UnderMaintenanceView />;
}
