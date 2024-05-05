import type { Metadata, Viewport } from "next";
import { Public_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";

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
  themeColor: "red",
};

export const metadata: Metadata = {
  title: {
    template: "%s – Deepayan",
    default: "Deepayan Foundation",
  },
  description: "Deepayan Foundation is a Nonprofit NGO",
  keywords: ["Deepayan", "Foundation", "Bangladesh", "NGO"],
  metadataBase: new URL("https://www.deepayan.org"),
  openGraph: {
    title: "Deepayan Foundation",
    description: "Deepayan Foundation is a Nonprofit NGO",
    url: "https://www.deepayan.org",
    siteName: "Deepayan Foundation",
    images: [
      {
        url: "https://www.deepayan.org/assets/deepayan-logo.png", // Must be an absolute URL
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
    description: "Deepayan Foundation is a Nonprofit NGO",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://www.deepayan.org/assets/deepayan-logo.png"],
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
      </body>
    </html>
  );
}
