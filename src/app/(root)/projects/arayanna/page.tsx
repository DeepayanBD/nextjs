import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { ArayannaView } from "src/sections/project/view/arayanna-view";

export const metadata: Metadata = {
  title: "Arayanna",
  description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
  alternates: {
    canonical: '/projects/arayanna',
  },
  openGraph: {
    title: "Arayanna – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
    url: "https://www.deepayan.org/projects/arayanna",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Arayanna – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Aranyana program promotes environmental sustainability through tree plantation, conservation, and climate awareness initiatives across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <ArayannaView />;
}
