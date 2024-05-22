import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s – Course – Deepayan",
    default: "Course – Deepayan",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
