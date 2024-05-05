import { Metadata } from "next";
import UnderMaintenanceView from "@/app/sections/_common/under-maintenance-view";

export const metadata: Metadata = {
  title: "Smart Parenting",
  openGraph: {
    title: "Smart Parenting – Course – Deepayan",
    url: "https://www.deepayan.org/course/smart-parnting",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Smart Parenting – Course – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <UnderMaintenanceView />;
}
