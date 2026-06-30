import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { ContactView } from "src/sections/contact/view/contact-view";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Deepayan Foundation to learn more about our programs, partnerships, volunteering opportunities, or how you can make a meaningful impact.",
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: "Contact Us – Deepayan Foundation",
    description: "Get in touch with Deepayan Foundation to learn more about our programs, partnerships, volunteering opportunities, or how you can make a meaningful impact.",
    url: "https://www.deepayan.org/contact-us",
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
    description: "Get in touch with Deepayan Foundation to learn more about our programs, partnerships, volunteering opportunities, or how you can make a meaningful impact.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
