import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialBar from "@/components/SocialBar";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Arjun Singh | Creative Developer",
  description: "High-end Scrollytelling Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#121212]">
      <body className={inter.className}>
        <Toaster theme="dark" position="bottom-right" richColors closeButton />
        <SocialBar />
        {children}
      </body>
    </html>
  );
}
