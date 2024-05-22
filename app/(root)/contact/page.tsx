import { Metadata } from "next";
import { ContactView } from "@/sections/root/view";
import deepRec from "@/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact – Deepayan",
    url: "https://www.deepayan.org/contact",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Contact – Deepayan",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <ContactView />;
}
