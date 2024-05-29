import { Metadata } from "next";
import ContactView from "./contact-view";
import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact – Deepayan Foundation",
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
    title: "Contact – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <ContactView />;
}
