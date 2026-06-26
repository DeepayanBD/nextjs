import type { Metadata } from "next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

import { InternshipView } from "src/sections/course/view/internship-view";

export const metadata: Metadata = {
  title: "Internship",
  description: "Deepayan Foundation's Internship course equips students and young professionals with practical experience, mentorship, leadership skills, and career-ready training in Bangladesh.",
  alternates: {
    canonical: '/courses/internship',
  },
  openGraph: {
    title: "Internship – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Internship course equips students and young professionals with practical experience, mentorship, leadership skills, and career-ready training in Bangladesh.",
    url: "https://www.deepayan.org/courses/internship",
    images: [
      {
        url: deepRec.src,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
  },
  twitter: {
    title: "Internship – Courses – Deepayan Foundation",
    description: "Deepayan Foundation's Internship course equips students and young professionals with practical experience, mentorship, leadership skills, and career-ready training in Bangladesh.",
    card: "summary_large_image",
    images: [deepRec.src],
  },
};

export default function InternshipPage() {
  return <InternshipView />;
}
