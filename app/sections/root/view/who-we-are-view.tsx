import OurGoal from "@/app/sections/_common/our-goal";
import GetDonate from "@/app/sections/_common/get-donate";
import OurSupporters from "@/app/sections/_common/our-supporters";
import HeroTwo from "@/app/sections/_common/hero/hero-two";

export default function WhoWeAreView() {
  return (
    <>
      <HeroTwo />

      <OurGoal />

      <OurSupporters />

      <GetDonate />
    </>
  );
}
