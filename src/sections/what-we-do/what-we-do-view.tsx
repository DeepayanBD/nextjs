import { OurWork } from "src/sections/our-work";
import { GetDonate } from "src/sections/get-donate";
import { HeroOne } from "src/sections/hero/hero-one";
import { OurWorkPart } from "src/sections/our-work-part";

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
