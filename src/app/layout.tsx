import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] , weight: ["100","200","300","400","500","600","700","800"]});

export const metadata: Metadata = {
  title: "Portfolio - Julian Magallanes",
  description: "Potfolio de desarrollo web de Julian Magallanes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
