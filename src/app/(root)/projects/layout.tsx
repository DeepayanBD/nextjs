import type { Metadata } from "next";

import { CONFIG } from "src/config-global";

export const metadata: Metadata = {
  title: {
    template: `%s – Projects – ${CONFIG.site.name}`,
    default: `Projects – ${CONFIG.site.name}`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
