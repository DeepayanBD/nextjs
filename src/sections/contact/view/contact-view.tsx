import { HeroOne } from "src/sections/hero/hero-one";

import ContactMap from "../contact-map";
import ContactsDetails from "../contact-details";

export default function ContactView() {
  return (
    <>
      <HeroOne />

      <ContactsDetails />

      <ContactMap />
    </>
  );
}
