import "./main.css";
import type { Metadata } from "next";

// (Adjust path if needed)
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "MR.NET — Live Events",
  description: "Bonding + failover connectivity for live events.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 1. w-full: Ensures the site uses full width 
         2. min-h-screen: Ensures footer is at bottom on short pages
         3. flex-col: Stacks Header, Main, Footer vertically
      */}
      <body className="flex min-h-screen w-full flex-col">
        
        {/* Header stays at the top */}
        <div className="shrink-0">
          <Header />
        </div>
        
        {/* Main grows to fill available space (flex-1) */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer: shrink-0 prevents it from being squashed */}
        <div className="shrink-0">
          <Footer />
        </div>
        
      </body>
    </html>
  );
}