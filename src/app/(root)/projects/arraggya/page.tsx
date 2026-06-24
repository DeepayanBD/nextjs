import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { ArraggyaView } from "src/sections/project/view/arraggya-view";

export const metadata: Metadata = {
  title: "Arraggya",
  openGraph: {
    title: "Arraggya – Project – Deepayan Foundation",
    url: "https://www.deepayan.org/projects/arraggya",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Arraggya – Project – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function ArraggyaPage() {
  return <ArraggyaView />;
}
