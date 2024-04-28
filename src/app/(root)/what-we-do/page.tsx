import { Metadata } from "next";
import { WhatWeDoView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "What We Do",
};

export default function Page() {
  return <WhatWeDoView />;
}
