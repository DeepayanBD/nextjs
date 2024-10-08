import { OurGoal } from "src/sections/our-goal";
import { GetDonate } from "src/sections/get-donate";
import { HeroTwo } from "src/sections/hero/hero-two";
import { OurSupporters } from "src/sections/our-supporters";

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
