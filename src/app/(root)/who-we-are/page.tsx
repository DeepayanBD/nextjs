import { Metadata } from "next";
import { WhoWeAreView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Who We Are",
};

export default function Page() {
  return <WhoWeAreView />;
}
