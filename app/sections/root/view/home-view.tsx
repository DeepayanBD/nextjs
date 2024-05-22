import { MainLayout } from "@/layouts/main";

import HomeHero from "@/sections/root/home/home-hero";
import HomeVision from "@/sections/root/home/home-vision";
import HomeSlider from "@/sections/root/home/home-slider";
import HomeSpeech from "@/sections/root/home/home-speech";

import OurWork from "@/sections/_common/our-work";
import GetDonate from "@/sections/_common/get-donate";
import OurSupporters from "@/sections/_common/our-supporters";

export default function HomeView() {
  return (
    <MainLayout>
      <HomeHero />

      <HomeVision />

      <HomeSlider />

      <OurWork />

      <HomeSpeech />

      <OurSupporters />

      <GetDonate />
    </MainLayout>
  );
}
