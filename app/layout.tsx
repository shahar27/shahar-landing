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
  metadataBase: new URL("https://shahartakofisher.com"),
  title: "שחר טקו פישר | ליווי רגשי אישי/ זוגי| הדרכת הורים | ADHD ODD",
  description:
    "ליווי רגשי מיודע טראומה המשלב עבודה עם הגוף, מערכת העצבים, דפוסי ילדות, הורות ומערכות יחסים. מרחב לחיבור, נשימה וחופש פנימי.",
  openGraph: {
    title: "שחר טקו פישר | ליווי רגשי, טראומה ומערכת העצבים",
    description:
      "ליווי רגשי מיודע טראומה המשלב עבודה עם הגוף, מערכת העצבים, דפוסי ילדות, הורות ומערכות יחסים. מרחב לחיבור, נשימה וחופש פנימי.",
    url: "https://shahartakofisher.com",
    siteName: "שחר טקו פישר",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "שחר טקו פישר - ליווי רגשי ומערכת העצבים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שחר טקו פישר | ליווי רגשי, טראומה ומערכת העצבים",
    description:
      "ליווי רגשי מיודע טראומה המשלב עבודה עם הגוף, מערכת העצבים, דפוסי ילדות, הורות ומערכות יחסים.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
