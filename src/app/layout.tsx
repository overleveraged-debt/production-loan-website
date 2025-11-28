import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/ab6c556e72972536.css";
import "../styles/2e5ecf18a2cce2f9.css";
import "../styles/f88b1d6827271c73.css";
import "../styles/4274f77eb8851db4.css";
import "../styles/7612da1ad8b36aa4.css";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Import the Footer component
import Popup from "../components/Popup";
import FloatingButtons from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Easy Personal Loan Services",
  description: "Fast and secure personal loans at low interest rates - Making loans simple, transparent, and accessible to everyone.",
  openGraph: {
    title: "Easy Personal Loan Services",
    description: "Fast and secure personal loans at low interest rates.",
    url: "https://www.easyplblr.com",
    siteName: "Easy Personal Loan Services",
    images: [
      {
        url: "https://www.easyplblr.com/og-image.jpg", // You should add an og-image.jpg to your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Personal Loan Services",
    description: "Fast and secure personal loans at low interest rates.",
    images: ["https://www.easyplblr.com/og-image.jpg"],
  },
  icons: {
    icon: "/fevicon.png",
    shortcut: "/fevicon.png",
    apple: "/fevicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </head>
      <body>
        <Popup />
        <Header />
        {children}
        <Footer /> {/* Render the Footer component */}
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
