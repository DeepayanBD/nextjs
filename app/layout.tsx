import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Public_Sans, Hind_Siliguri } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import deepRec from "@/public/assets/logo/deepayan-logo-rectangular.png";

const open_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const hind_siliguri = Hind_Siliguri({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hind-siliguri",
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "blue",
};

export const metadata: Metadata = {
  title: {
    template: "%s – Deepayan Foundation",
    default: "Deepayan Foundation",
  },
  description:
    "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
  keywords: ["Deepayan", "Foundation", "Bangladesh", "NGO"],
  metadataBase: new URL("https://www.deepayan.org"),
  openGraph: {
    title: "Deepayan Foundation",
    description:
      "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
    url: "https://www.deepayan.org",
    siteName: "Deepayan Foundation",
    images: [
      {
        url: deepRec.src, // Must be an absolute URL
        width: 602,
        height: 301,
        alt: "Deepayan Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepayan Foundation",
    description:
      "The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: [deepRec.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cian9Q_-_nQFUKrXRYOHjQIf6KHImkFlI2yPLsKB9YI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${hind_siliguri.variable} font-sans selection:bg-blue-50 selection:text-blue-500`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
