import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation"; // Adjust path to your Navigation component

export const metadata: Metadata = {
  title: "Samira Sharma | Portfolio",
  description: "Portfolio website showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}