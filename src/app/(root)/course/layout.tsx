import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s – Course – Deepayan Foundation",
    default: "Course – Deepayan Foundation",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
