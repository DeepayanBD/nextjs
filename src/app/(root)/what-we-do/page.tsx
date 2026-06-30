import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { WhatWeDoView } from "src/sections/view/what-we-do-view";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Discover how Deepayan Foundation transforms lives through education, healthcare, humanitarian aid, environmental initiatives, and community development across Bangladesh.",
  alternates: {
    canonical: '/what-we-do',
  },
  openGraph: {
    title: "What We Do – Deepayan Foundation",
    description: "Discover how Deepayan Foundation transforms lives through education, healthcare, humanitarian aid, environmental initiatives, and community development across Bangladesh.",
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
    description: "Discover how Deepayan Foundation transforms lives through education, healthcare, humanitarian aid, environmental initiatives, and community development across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function WhatWeDoPage() {
  return <WhatWeDoView />;
}
