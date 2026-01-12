import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik Nawale | Portfolio",
  description: "Quant Developer & RL Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Added 'flex flex-col' to body to handle vertical stacking */}
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        
        {/* 2. REMOVED the 'max-w-4xl' div. Now everything is 100% width. */}
        <Navbar />
        
        {/* 3. Main wrapper allows children to fill space but keeps footer at bottom if needed */}
        <main className="w-full flex-grow">
          {children}
        </main>
        
      </body>
    </html>
  );
}