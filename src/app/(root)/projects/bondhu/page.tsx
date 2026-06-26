import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { BondhuView } from "src/sections/project/view/bondhu-view";

export const metadata: Metadata = {
  title: "Bondhu",
  description: "Deepayan Foundation's Bondhu project partners with local and international organizations to implement humanitarian initiatives and deliver aid effectively across Bangladesh.",
  alternates: {
    canonical: '/projects/bondhu',
  },
  openGraph: {
    title: "Bondhu – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Bondhu project partners with local and international organizations to implement humanitarian initiatives and deliver aid effectively across Bangladesh.",
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
    title: "Bondhu – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Bondhu project partners with local and international organizations to implement humanitarian initiatives and deliver aid effectively across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <BondhuView />;
}
