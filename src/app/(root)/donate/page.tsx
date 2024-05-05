import { Metadata } from "next";
import { DonateView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Donate",
  openGraph: {
    title: "Donate – Deepayan",
    url: "https://www.deepayan.org/donate",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Donate – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <DonateView />;
}
