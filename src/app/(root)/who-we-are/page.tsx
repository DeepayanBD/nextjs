import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { WhoWeAreView } from "src/sections/view/who-we-are-view";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Learn about Deepayan Foundation's mission, vision, values, and commitment to empowering communities through sustainable development and compassionate service.",
  alternates: {
    canonical: '/who-we-are',
  },
  openGraph: {
    title: "Who We Are – Deepayan Foundation",
    description: "Learn about Deepayan Foundation's mission, vision, values, and commitment to empowering communities through sustainable development and compassionate service.",
    url: "https://www.deepayan.org/who-we-are",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Who We Are – Deepayan Foundation",
    description: "Learn about Deepayan Foundation's mission, vision, values, and commitment to empowering communities through sustainable development and compassionate service.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function WhoWeArePage() {
  return <WhoWeAreView />;
}
