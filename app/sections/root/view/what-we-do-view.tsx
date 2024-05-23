import GetDonate from "@/app/sections/_common/get-donate";
import OurWork from "@/app/sections/_common/our-work";
import OurWorkPart from "@/app/sections/_common/our-work-part";

import HeroOne from "@/app/sections/_common/hero/hero-one";

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
