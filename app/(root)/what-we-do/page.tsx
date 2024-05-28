import { Metadata } from "next";
import WhatWeDoView from "./what-we-do-view";
import deepRec from "@/app/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "What We Do",
  openGraph: {
    title: "What We Do – Deepayan Foundation",
    url: "https://www.deepayan.org/what-we-do",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "What We Do – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <WhatWeDoView />;
}
