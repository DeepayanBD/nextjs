import { Metadata } from "next";
import { DonateView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Donate",
};

export default function Page() {
  return <DonateView />;
}
