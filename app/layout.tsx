import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { artistName, siteDescription, siteName, siteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteName,
        template: `%s — ${artistName}`,
    },
    description: siteDescription,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <Nav />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
