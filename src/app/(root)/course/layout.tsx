import type { Metadata } from "next";

import { CONFIG } from "src/config-global";

export const metadata: Metadata = {
  title: {
    template: `%s – Course – ${CONFIG.site.name}`,
    default: `Course – ${CONFIG.site.name}`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
