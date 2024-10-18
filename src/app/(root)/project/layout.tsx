import type { Metadata } from "next";

import { CONFIG } from "src/config-global";

export const metadata: Metadata = {
  title: {
    template: `%s – Project – ${CONFIG.site.name}`,
    default: `Project – ${CONFIG.site.name}`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
