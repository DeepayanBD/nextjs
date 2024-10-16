import { OurWork } from "src/sections/components/our-work";
import { GetDonate } from "src/sections/components/get-donate";
import { HeroOne } from "src/sections/components/hero/hero-one";
import { OurWorkPart } from "src/sections/components/our-work-part";

export function WhatWeDoView() {
  return (
    <>
      <HeroOne />

      <OurWork />

      <OurWorkPart />

      <GetDonate />
    </>
  );
}
