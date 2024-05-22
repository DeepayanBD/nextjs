import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s – Project – Deepayan",
    default: "Project – Deepayan",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
