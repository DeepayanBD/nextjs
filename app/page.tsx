import { Metadata } from "next";
import { HomeView } from "@/sections/root/view";

export const metadata: Metadata = {
  title: "Deepayan Foundation",
};

export default function Home() {
  return <HomeView />;
}
