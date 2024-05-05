import { Metadata } from "next";
import { WhoWeAreView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Who We Are",
  openGraph: {
    title: "Who We Are – Deepayan",
    url: "https://www.deepayan.org/who-we-are",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Who We Are – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <WhoWeAreView />;
}
