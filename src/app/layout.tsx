import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/ui/sidebar";
import MobileNav from "@/app/ui/MobileNav";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sil Loffeld Portfolio",
    description: "Portfolio van Sil Loffeld - Software Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        >
        <Sidebar />
        <MobileNav />
        {children}
        </body>
        </html>
    );
}