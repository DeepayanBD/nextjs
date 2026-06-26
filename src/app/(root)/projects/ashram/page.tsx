import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { AshramView } from "src/sections/project/view/ashram-view";

export const metadata: Metadata = {
  title: "Ashram",
  description: "Deepayan Foundation's Ashram program provides shelter, nutritious meals, healthcare, and compassionate care for elderly individuals, orphans, and vulnerable people across Bangladesh.",
  alternates: {
    canonical: '/projects/ashram',
  },
  openGraph: {
    title: "Ashram – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Ashram program provides shelter, nutritious meals, healthcare, and compassionate care for elderly individuals, orphans, and vulnerable people across Bangladesh.",
    url: "https://www.deepayan.org/projects/ashram",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Ashram – Projects – Deepayan Foundation",
    description: "Deepayan Foundation's Ashram program provides shelter, nutritious meals, healthcare, and compassionate care for elderly individuals, orphans, and vulnerable people across Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <AshramView />;
}
