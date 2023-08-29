import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/components/providers/ModalProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Reserved",
    default: "Reserved & Shop Online",
  },
  description: "Generated by create next app",
  keywords: ["Clothes", "Reserved", "Shop", "Store", "Online", "Fashion"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
