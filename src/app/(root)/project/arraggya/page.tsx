import { Metadata } from "next";
import { ArraggyaView } from "@/app/sections/root/project/view";

export const metadata: Metadata = {
  title: "Arraggya",
};

export default function Page() {
  return <ArraggyaView />;
}
