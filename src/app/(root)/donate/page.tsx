import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { DonateView } from "src/sections/view/donate-view";

export const metadata: Metadata = {
  title: "Donate",
  alternates: {
    canonical: '/donate',
  },
  openGraph: {
    title: "Donate – Deepayan Foundation",
    url: "https://www.deepayan.org/donate",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Donate – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function DonatePage() {
  return <DonateView />;
}
