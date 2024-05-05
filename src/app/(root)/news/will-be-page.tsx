import { Metadata } from "next";
import { HomeListView } from "@/app/sections/news/view";
import deepRec from "@/app/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "News",
  openGraph: {
    title: "News – Deepayan",
    url: "https://www.deepayan.org/news",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "News – Deepayan",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <HomeListView />;
}
