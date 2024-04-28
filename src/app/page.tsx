import { Metadata } from "next";
import Welcome from "@/Sections/pages/Welcome";

export const metadata: Metadata = {
  title: "Welcome Deepayan Foundation",
};

export default function Home() {
  return <Welcome />;
}
