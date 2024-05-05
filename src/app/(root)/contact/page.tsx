import { Metadata } from "next";
import { ContactView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact – Deepayan",
    url: "https://www.deepayan.org/contact",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Contact – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <ContactView />;
}
