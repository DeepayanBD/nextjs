import { Metadata } from "next";
import { HomeListView } from "@/app/sections/news/view";

export const metadata: Metadata = {
  title: "News",
  openGraph: {
    title: "News – Deepayan",
    url: "https://www.deepayan.org/news",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "News – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <HomeListView />;
}
