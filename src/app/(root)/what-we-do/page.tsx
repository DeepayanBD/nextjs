import { Metadata } from "next";
import { WhatWeDoView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "What We Do",
  openGraph: {
    title: "What We Do – Deepayan",
    url: "https://www.deepayan.org/what-we-do",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "What We Do – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <WhatWeDoView />;
}
