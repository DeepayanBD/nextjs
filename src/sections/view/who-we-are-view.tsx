import { OurGoal } from "src/sections/components/our-goal";
import { GetDonate } from "src/sections/components/get-donate";
import { HeroTwo } from "src/sections/components/hero/hero-two";
import { OurSupporters } from "src/sections/components/our-supporters";

export function WhoWeAreView() {
  return (
    <>
      <HeroTwo />

      <OurGoal />

      <OurSupporters />

      <GetDonate />
    </>
  );
}
