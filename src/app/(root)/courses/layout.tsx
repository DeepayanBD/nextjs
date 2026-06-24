import type { Metadata } from "next";

import { CONFIG } from "src/config-global";

export const metadata: Metadata = {
  title: {
    template: `%s – Courses – ${CONFIG.site.name}`,
    default: `Courses – ${CONFIG.site.name}`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
