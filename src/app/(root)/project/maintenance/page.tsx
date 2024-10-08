import type { Metadata } from "next";

import { UnderMaintenanceView } from "src/sections/view/under-maintenance-view";

export const metadata: Metadata = {
  title: "Maintenance",
};

export default function Page() {
  return <UnderMaintenanceView />;
}
