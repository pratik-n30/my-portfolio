import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Notice we still use @/components because Next.js knows where root is
import Navbar from "@/components/navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik Nawale | Portfolio",
  description: "Engineering & Tech Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="max-w-4xl mx-auto px-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}