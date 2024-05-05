import { Metadata } from "next";
import UnderMaintenanceView from "@/app/sections/_common/under-maintenance-view";

export const metadata: Metadata = {
  title: "Pre Marraige",
  openGraph: {
    title: "Pre Marraige – Course – Deepayan",
    url: "https://www.deepayan.org/course/pre-marriage",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png",
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Pre Marraige – Course – Deepayan",
    card: "summary_large_image",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
  },
};

export default function Page() {
  return <UnderMaintenanceView />;
}
