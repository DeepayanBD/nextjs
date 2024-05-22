import { Metadata } from "next";
import { WhoWeAreView } from "@/sections/root/view";
import deepRec from "@/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Who We Are",
  openGraph: {
    title: "Who We Are – Deepayan",
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
    title: "Who We Are – Deepayan",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <WhoWeAreView />;
}
