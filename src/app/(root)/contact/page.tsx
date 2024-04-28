import { Metadata } from "next";
import { ContactView } from "@/app/sections/root/view";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return <ContactView />;
}
