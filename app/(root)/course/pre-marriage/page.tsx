import { Metadata } from "next";
import UnderMaintenanceView from "@/app/_common/under-maintenance-view";
import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

export const metadata: Metadata = {
  title: "Pre Marraige",
  openGraph: {
    title: "Pre Marraige – Course – Deepayan Foundation",
    url: "https://www.deepayan.org/course/pre-marriage",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Pre Marraige – Course – Deepayan Foundation",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function Page() {
  return <UnderMaintenanceView />;
}
