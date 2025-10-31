import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";

import { Navbar } from "@/components/common";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recylo – Tukar Sampah Jadi Uang",
  description:
    "Sampahmu bernilai. Tukar jadi uang bersama Recylo dengan pickup terjadwal dan penilaian transparan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="top"
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20 lg:pt-28">{children}</div>
      </body>
    </html>
  );
}
