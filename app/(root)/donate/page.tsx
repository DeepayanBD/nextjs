import { Metadata } from "next";
import { DonateView } from "@/sections/root/view";
import deepRec from "@/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Donate",
  openGraph: {
    title: "Donate – Deepayan Foundation",
    url: "https://www.deepayan.org/donate",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Donate – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <DonateView />;
}
