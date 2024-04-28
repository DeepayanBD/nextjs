import { ReactNode } from "react";
import { MainLayout } from "@/Layouts/Main";

export default function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
