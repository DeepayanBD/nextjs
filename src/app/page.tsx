import { Metadata } from "next";
import { HomeView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Welcome Deepayan Foundation",
};

export default function Home() {
  return <HomeView />;
}
