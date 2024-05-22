import { Metadata } from "next";
import UnderMaintenanceView from "@/sections/_common/under-maintenance-view";

export const metadata: Metadata = {
  title: "Maintenance",
};

export default function Page() {
  return <UnderMaintenanceView />;
}
