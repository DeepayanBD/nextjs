import { Metadata } from "next";
import { KurbaniView } from "@/app/sections/root/project/view";

export const metadata: Metadata = {
  title: "Kurbani",
};

export default function Page() {
  return <KurbaniView />;
}
