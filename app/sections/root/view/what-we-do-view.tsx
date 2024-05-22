import GetDonate from "@/sections/_common/get-donate";
import OurWork from "@/sections/_common/our-work";
import OurWorkPart from "@/sections/_common/our-work-part";

import HeroOne from "@/sections/_common/hero/hero-one";

export default function WhatWeDoView() {
  return (
    <>
      <HeroOne />

      <OurWork />

      <OurWorkPart />

      <GetDonate />
    </>
  );
}
