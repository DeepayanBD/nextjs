import { HeroOne } from "src/sections/components/hero/hero-one";

import { ContactMap } from "../contact-map";
import { ContactsDetails } from "../contact-details";

export function ContactView() {
  return (
    <>
      <HeroOne />

      <ContactsDetails />

      <ContactMap />
    </>
  );
}
