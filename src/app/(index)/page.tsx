import type { Metadata } from "next";

import { HomeView } from "src/sections/home/view/home-view";

export const metadata: Metadata = {
  title: { absolute: "Deepayan Foundation" },
  description:
    "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
};

export default function HomePage() {
  return <HomeView />;
}
