import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Zadanie rekrutacyjne - nawigacja",
    description: "Zadanie rekrutacyjne",
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased bg-bg-page-bg flex flex-col items-center`}
            >
                <div className="max-w-container w-full">{children}</div>
            </body>
        </html>
    );
}
