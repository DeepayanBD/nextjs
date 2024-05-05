import { Metadata } from "next";
import { ArraggyaView } from "@/app/sections/root/project/view";
import deepRec from "@/app/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Arraggya",
  openGraph: {
    title: "Arraggya – Project – Deepayan",
    url: "https://www.deepayan.org/project/arraggya",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Arraggya – Project – Deepayan",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <ArraggyaView />;
}
