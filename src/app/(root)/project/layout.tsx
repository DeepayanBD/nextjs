import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CONFIG } from "src/config-global";

export const metadata: Metadata = {
  title: {
    template: `%s – Project – ${CONFIG.site.name}`,
    default: `Project – ${CONFIG.site.name}`,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
