import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahar-landing.vercel.app"),
  title: "שחר טקו פישר | אימון רגשי, גוף ומערכת העצבים",
  description:
    "ליווי רגשי מיודע טראומה, עבודה עם מערכת העצבים, גוף, תודעה, הורות ומערכות יחסים.",
  openGraph: {
    title: "שחר טקו פישר | אימון רגשי, גוף ומערכת העצבים",
    description:
      "ליווי רגשי מיודע טראומה, עבודה עם מערכת העצבים, גוף, תודעה, הורות ומערכות יחסים.",
    url: "https://shahar-landing.vercel.app",
    siteName: "שחר טקו פישר",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "שחר טקו פישר",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שחר טקו פישר | אימון רגשי, גוף ומערכת העצבים",
    description:
      "ליווי רגשי מיודע טראומה, עבודה עם מערכת העצבים, גוף, תודעה, הורות ומערכות יחסים.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
