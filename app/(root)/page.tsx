import { Metadata } from "next";

import HomeHero from "./home-hero";
import HomeVision from "./home-vision";
import HomeSlider from "./home-slider";
import HomeSpeech from "./home-speech";

import OurWork from "@/app/_common/our-work";
import GetDonate from "@/app/_common/get-donate";
import OurSupporters from "@/app/_common/our-supporters";

export const metadata: Metadata = {
  title: "Deepayan Foundation",
  description:
    "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeVision />

      <HomeSlider />

      <OurWork />

      <HomeSpeech />

      <OurSupporters />

      <GetDonate />
    </>
  );
}
