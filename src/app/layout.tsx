import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dnmotorepair.com"),

  title: {
    default: "DN Moto Repair",
    template: "%s | DN Moto Repair",
  },

  description:
    "Professional dirt bike maintenance and repair specializing in motorcycles under 250cc. Honest pricing, quality workmanship, and rider-owned service.",

  keywords: [
    "DN Moto",
    "dirt bike repair",
    "dirt bike maintenance",
    "Yamaha TTR125",
    "Honda CRF",
    "Kawasaki KLX",
    "Suzuki DRZ",
    "carburetor cleaning",
    "motorcycle maintenance",
    "oil change",
  ],

  authors: [{ name: "DN Moto" }],

  creator: "DN Moto",

  openGraph: {
    title: "DN Moto Repair",
    description:
      "Professional maintenance and repair for dirt bikes under 250cc.",

    url: "https://dnmotorepair.com",

    siteName: "DN Moto Repair",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DN Moto Repair",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DN Moto Repair",
    description:
      "Professional dirt bike maintenance and repair specializing in motorcycles under 250cc.",

    images: ["/images/hero.jpg"],
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
className={`${sora.variable} ${inter.variable} antialiased bg-[#0b0d0f]`}
>
        {children}
      </body>
    </html>
  );
}
