import { Metadata } from "next";
import NewsList from "@/Sections/pages/news/NewsList";

export const metadata: Metadata = {
  title: "News",
};

export default function Page() {
  return <NewsList />;
}
