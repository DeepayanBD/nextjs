import { MainLayout } from "@/Layouts/Main";
import HomeHero from "@/Sections/Home/HomeHero";
import HomeVision from "@/Sections/Home/HomeVision";
import OurWork from "@/Sections/Common/OurWork";
import HomeSlider from "@/Sections/Home/HomeSlider";
import HomeSpeech from "@/Sections/Home/HomeSpeech";
import OurSupporters from "@/Sections/Common/OurSupporters";
import GetDonate from "@/Sections/Common/GetDonate";

export default function Welcome() {
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
