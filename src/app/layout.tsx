import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCAT - Texas Roofing Contractors Association",
  description: "Connecting property owners with licensed, professional roofing contractors since 1975.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-on_surface">
        {children}
      </body>
    </html>
  );
}
