import GetDonate from "@/app/_common/get-donate";
import OurWork from "@/app/_common/our-work";
import OurWorkPart from "@/app/_common/our-work-part";

import HeroOne from "@/app/_common/hero/hero-one";

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
