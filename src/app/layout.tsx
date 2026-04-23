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
  title: "Usama Tariq - React Native & Full Stack Developer",
  description: "Professional React Native, Android Kotlin, and Full Stack Developer with 5+ years experience. Specialized in cross-platform mobile development, web applications, and scalable backend solutions. 150K+ app downloads, 500+ clients served.",
  keywords: ["React Native Developer", "Android Kotlin", "Full Stack Developer", "Mobile App Development", "Web Development", "Node.js", "React.js", "Next.js"],
  authors: [{ name: "Usama Tariq" }],
  creator: "Usama Tariq",
  publisher: "Usama Tariq",
  openGraph: {
    title: "Usama Tariq - React Native & Full Stack Developer",
    description: "Professional React Native, Android Kotlin, and Full Stack Developer with 5+ years experience. Transform your ideas into successful digital products.",
    url: "https://usama-portfolio.vercel.app",
    siteName: "Usama Tariq Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Tariq - React Native & Full Stack Developer",
    description: "Professional React Native, Android Kotlin, and Full Stack Developer with 5+ years experience.",
    creator: "@usama579",
  },
  robots: {
    index: true,
    follow: true,
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
