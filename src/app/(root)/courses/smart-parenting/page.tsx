import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { SmartParentingView } from "src/sections/course/view/smart-parenting-view";

export const metadata: Metadata = {
  title: "Smart Parenting",
  description: "Deepayan Foundation's Smart Parenting course equips parents with practical strategies, communication skills, and child development guidance to build healthier families.",
  alternates: {
    canonical: '/courses/smart-parenting',
  },
  openGraph: {
    title: "Smart Parenting – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Smart Parenting course equips parents with practical strategies, communication skills, and child development guidance to build healthier families.",
    url: "https://www.deepayan.org/courses/smart-parnting",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Smart Parenting – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Smart Parenting course equips parents with practical strategies, communication skills, and child development guidance to build healthier families.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function SmartParentingPage() {
  return <SmartParentingView />;
}
