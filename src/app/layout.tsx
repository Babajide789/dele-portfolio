import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/features/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import FloatingThemeToggle from "@/components/features/FloatingToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Peter Olafimihan | Project Manager & Data Analyst | Power BI • Excel • Data Visualization",
  description:
    "Peter Olafimihan is a Data Analyst and Project Manager skilled in Power BI, Excel, and Data Visualization. Helping businesses make smarter decisions through clear insights, analytics, and measurable impact.",
  keywords: [
    "Data Analyst Portfolio",
    "Peter Olafimihan",
    "Power BI Expert",
    "Excel Dashboard Developer",
    "Data Visualization Specialist",
    "Business Intelligence Analyst",
    "Project Management Analytics",
    "Construction Data Insights",
    "Data Analytics Portfolio",
    "Drone Mapping with Data Analysis",
    "Data Reporting and Visualization",
    "BI Consultant",
    "Data Storytelling",
    "Performance Analytics",
  ],
  authors: [{ name: "Peter Olafimihan" }],
  creator: "Peter Olafimihan",
  publisher: "Peter Olafimihan",
  category: "Data Analytics Portfolio",
  openGraph: {
    title:
      "Peter Olafimihan | Project Manager & Data Analyst | Power BI • Excel • Visualization",
    description:
      "Explore Peter Olafimihan’s professional portfolio — showcasing Power BI dashboards, Excel reports, and data-driven project management that transforms raw data into business clarity.",
    url: "https://dele-portfolio.vercel.app/",
    siteName: "Peter Olafimihan | Project Manager & Data Analyst Portfolio",
    images: [
      {
        url: "https://dele-portfolio.vercel.app/oog-thumbnail-light-theme.png",
        width: 1200,
        height: 630,
        alt: "Peter Olafimihan – Project Manager & Data Analyst Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Peter Olafimihan | Data Analyst & Project Manager | Power BI • Excel • Visualization",
    description:
      "Data Analyst & Project Manager helping businesses turn data into action. Explore dashboards, analytics, and impact-driven insights.",
    images: [
      "https://dele-portfolio.vercel.app/oog-thumbnail-light-theme.png",
    ],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Additional dynamic theme meta images for social previews */}
        <meta
          property="og:image"
          content="https://dele-portfolio.vercel.app/oog-thumbnail-light-theme.png"
          media="(prefers-color-scheme: light)"
        />
        <meta
          property="og:image"
          content="https://dele-portfolio.vercel.app/oog-thumbnail-dark-theme.png"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="twitter:image"
          content="https://dele-portfolio.vercel.app/oog-thumbnail-light-theme.png"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="twitter:image"
          content="https://dele-portfolio.vercel.app/oog-thumbnail-dark-theme.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FloatingThemeToggle />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
