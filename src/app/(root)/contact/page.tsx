import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import ContactView from "src/sections/contact/view/contact-view";

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
