import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s – Project – Deepayan Foundation",
    default: "Project – Deepayan Foundation",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
