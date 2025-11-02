import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Analyst Portfolio | Expert in Data Analytics, Power BI & Project Management",
  description:
    "Explore the portfolio of a skilled Data Analyst proficient in Data Analysis, Power BI, Excel, Project Management, and Drone Mapping. Transforming raw data into actionable insights for business growth.",
  keywords: [
    "Data Analyst Portfolio",
    "Data Analytics Expert",
    "Power BI Dashboard Developer",
    "Business Intelligence Analyst",
    "Data Visualization Specialist",
    "Microsoft Excel Professional",
    "Data Management Expert",
    "Project Management with Data Insights",
    "DJI Drone Mapping Analyst",
    "Data-driven Decision Making",
    "Freelance Data Analyst",
    "Data Reporting and Visualization",
    "Analyst for Business Intelligence",
    "Excel Dashboard Developer",
    "Power BI Consultant",
    "Data Storytelling",
  ],
  authors: [{ name: "Your Client’s Full Name" }],
  openGraph: {
    title: "Data Analyst Portfolio | Power BI, Excel, and Project Management Expertise",
    description:
      "Professional Data Analyst specializing in Data Visualization, Power BI Dashboards, Excel Analytics, and Project Leadership. Turning data into measurable business results.",
    url: "https://dele-portfolio.vercel.app/",
    siteName: "Data Analyst Portfolio",
    images: [
      {
        url: "https://dele-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Analyst Portfolio – Power BI, Excel, Project Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Data Analyst Portfolio | Power BI, Excel, and Data Visualization Expert",
    description:
      "Explore data visualization, analytics, and reporting projects by an expert Data Analyst. Transforming data into insight and clarity.",
    images: ["/og-image.png"],
    creator: "@deleolafimihan",
  },
  alternates: {
    canonical: "https://dele-portfolio.vercel.app/",
  },
  metadataBase: new URL("https://dele-portfolio.vercel.app/"),

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
