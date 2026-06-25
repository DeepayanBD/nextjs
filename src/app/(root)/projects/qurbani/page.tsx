import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { QurbaniView } from "src/sections/project/view/qurbani-view";

export const metadata: Metadata = {
  title: "Qurbani",
  alternates: {
    canonical: '/projects/qurbani',
  },
  openGraph: {
    title: "Qurbani – Project – Deepayan Foundation",
    url: "https://www.deepayan.org/projects/qurbani",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Qurbani – Project – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function QurbaniPage() {
  return <QurbaniView />;
}
