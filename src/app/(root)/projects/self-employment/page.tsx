import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { SelfEmploymentView } from "src/sections/project/view/self-employment-view";

export const metadata: Metadata = {
  title: "Self Employment",
  description: "Deepayan Foundation's Self Employment program empowers women, youth, and low-income families with skills, entrepreneurship training, and sustainable livelihood opportunities across Bangladesh.",
  alternates: {
    canonical: '/projects/self-employment',
  },
  openGraph: {
    title: "Self Employment – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Self Employment program empowers women, youth, and low-income families with skills, entrepreneurship training, and sustainable livelihood opportunities across Bangladesh.",
    url: "https://www.deepayan.org/projects/self-employment",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Self Employment – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Self Employment program empowers women, youth, and low-income families with skills, entrepreneurship training, and sustainable livelihood opportunities across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <SelfEmploymentView />;
}
