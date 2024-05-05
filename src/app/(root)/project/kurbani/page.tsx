import { Metadata } from "next";
import { KurbaniView } from "@/app/sections/root/project/view";

export const metadata: Metadata = {
  title: "Kurbani",
  openGraph: {
    title: "Kurbani – Project – Deepayan",
    url: "https://www.deepayan.org/project/kurbani",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "kurbani – Project – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <KurbaniView />;
}
