import type { Metadata, Viewport } from "next";
import { Noto_Sans_Arabic, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-sans",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beylens - قارن الأسعار بذكاء اصطناعي",
  description: "منصة مقارنة الأسعار بالذكاء الاصطناعي في أوروبا. قارن أسعار الإلكترونيات، الموضة، المكياج، العطور، السفر، التأمين وأكثر.",
  keywords: ["مقارنة أسعار", "ذكاء اصطناعي", "أوروبا", "تسوق", "إلكترونيات", "موضة"],
  authors: [{ name: "Beylens" }],
  openGraph: {
    title: "Beylens - قارن الأسعار بذكاء اصطناعي",
    description: "منصة مقارنة الأسعار بالذكاء الاصطناعي في أوروبا",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoSansArabic.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
