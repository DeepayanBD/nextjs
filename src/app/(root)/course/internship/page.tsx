import { Metadata } from "next";
import UnderMaintenanceView from "@/app/sections/_common/under-maintenance-view";

export const metadata: Metadata = {
  title: "Internship",
};

export default function Page() {
  return <UnderMaintenanceView />;
}
