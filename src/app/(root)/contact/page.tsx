import { Metadata } from "next";
import Contact from "@/Sections/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return <Contact />;
}
