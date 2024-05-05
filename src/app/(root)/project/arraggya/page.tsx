import { Metadata } from "next";
import { ArraggyaView } from "@/app/sections/root/project/view";

export const metadata: Metadata = {
  title: "Arraggya",
  openGraph: {
    title: "Arraggya – Project – Deepayan",
    url: "https://www.deepayan.org/project/arraggya",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Arraggya – Project – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <ArraggyaView />;
}
