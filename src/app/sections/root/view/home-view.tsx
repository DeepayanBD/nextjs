import { MainLayout } from "@/app/layouts/main";

import HomeHero from "@/app/sections/root/home/home-hero";
import HomeVision from "@/app/sections/root/home/home-vision";
import HomeSlider from "@/app/sections/root/home/home-slider";
import HomeSpeech from "@/app/sections/root/home/home-speech";

import OurWork from "@/app/sections/_common/our-work";
import GetDonate from "@/app/sections/_common/get-donate";
import OurSupporters from "@/app/sections/_common/our-supporters";

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
