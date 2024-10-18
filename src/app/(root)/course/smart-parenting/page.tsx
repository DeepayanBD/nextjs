import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { UnderMaintenanceView } from "src/sections/view/under-maintenance-view";

export const metadata: Metadata = {
  title: "Smart Parenting",
  openGraph: {
    title: "Smart Parenting – Course – Deepayan Foundation",
    url: "https://www.deepayan.org/course/smart-parnting",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Smart Parenting – Course – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function SmartParentingPage() {
  return <UnderMaintenanceView />;
}
