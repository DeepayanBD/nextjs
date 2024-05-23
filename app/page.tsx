import { Metadata } from "next";
import { HomeView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Deepayan Foundation",
  description:
    "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
};

export default function Home() {
  return <HomeView />;
}
