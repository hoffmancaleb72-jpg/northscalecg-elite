import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Consulting Elite | NorthScale",
  description:
    "The operating system for NorthScale contractor clients. Track every job, every system, every follow-up.",
  metadataBase: new URL("https://northscalecgelite.vercel.app"),
  openGraph: {
    title: "Consulting Elite | NorthScale",
    description: "CRM for NorthScale contractor clients.",
    url: "https://northscalecgelite.vercel.app",
    siteName: "Consulting Elite",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-ns-bg text-ns-text antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
