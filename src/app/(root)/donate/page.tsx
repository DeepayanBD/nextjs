import { Metadata } from "next";
import Donate from "@/Sections/pages/Donate";

export const metadata: Metadata = {
  title: "Donate",
};

export default function Page() {
  return <Donate />;
}
