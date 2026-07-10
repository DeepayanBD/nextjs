import { HeroOne } from "src/sections/components/hero/hero-one";

import { ContactMap } from "../contact-map";
import { ContactDetails } from "../contact-details";

export function ContactView() {
  return (
    <>
      <HeroOne />

      <ContactDetails />

      <ContactMap />
    </>
  );
}
