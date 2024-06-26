import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SidebarOpenend from "../components/sidebar-opened";
import HeaderContainer from "../components/header-container";

// const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          " bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen flex-col bg-gray-100/40 dark:bg-gray-800/40">
          {/* Iconos de la barra lateral en grande */}
          {/* SidebarBig */}
          <SidebarOpenend></SidebarOpenend>

          {/* Iconos de la barra cerrada, espacio en blanco y dropdownprofile */}
          <div className="flex flex-col md:py-0 sm:py-4 sm:pl-14">
            {/* HeaderContainer */}
            <HeaderContainer></HeaderContainer>

            {/* main */}
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
