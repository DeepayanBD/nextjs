import { ReactNode } from "react";
import { MainLayout } from "@/app/layouts/main";

export default function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
