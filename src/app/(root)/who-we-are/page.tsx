import { Metadata } from "next";
import WhoWeAre from "@/Sections/pages/WhoWeAre";

export const metadata: Metadata = {
  title: "Who We Are",
};

export default function Page() {
  return <WhoWeAre />;
}
