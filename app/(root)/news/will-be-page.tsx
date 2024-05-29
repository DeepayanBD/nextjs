import { Metadata } from "next";
import HomeListView from "./home-list-view";
import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "News",
  openGraph: {
    title: "News – Deepayan Foundation",
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
    title: "News – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <HomeListView />;
}
