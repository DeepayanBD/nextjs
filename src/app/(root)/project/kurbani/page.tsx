import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import KurbaniView from "src/sections/project/view/kurbani-view";

export const metadata: Metadata = {
  title: "Kurbani",
  openGraph: {
    title: "Kurbani – Project – Deepayan Foundation",
    url: "https://www.deepayan.org/project/kurbani",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "kurbani – Project – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <KurbaniView />;
}
