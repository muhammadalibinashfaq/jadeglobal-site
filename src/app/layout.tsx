import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jadeglobal.site — Digital Transformation Partner",
  description:
    "Premier IT consulting, integration, and managed services. Cloud Transformation, ERP & CRM Modernization, Data & Analytics, AI & Intelligent Automation.",
  keywords: [
    "jadeglobal.site",
    "Digital Transformation",
    "IT Consulting",
    "Cloud Migration",
    "Salesforce",
    "Oracle",
    "AI Automation",
    "ERP Modernization",
  ],
  authors: [{ name: "jadeglobal.site" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "jadeglobal.site — Digital Transformation Partner",
    description:
      "Premier IT consulting, integration, and managed services for enterprise digital transformation.",
    siteName: "jadeglobal.site",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-[#000000] text-white font-sans selection:bg-white/15 selection:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
