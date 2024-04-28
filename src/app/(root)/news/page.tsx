import { Metadata } from "next";
import { HomeListView } from "@/app/sections/news/view";

export const metadata: Metadata = {
  title: "News",
};

export default function Page() {
  return <HomeListView />;
}
