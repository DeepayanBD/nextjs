import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { UnderMaintenanceView } from "src/sections/view/under-maintenance-view";

export const metadata: Metadata = {
  title: "Bondhu",
  alternates: {
    canonical: '/projects/bondhu',
  },
  openGraph: {
    title: "Bondhu – Project – Deepayan Foundation",
    url: "https://www.deepayan.org/projects/bondhu",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Bondhu – Project – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <UnderMaintenanceView />;
}
