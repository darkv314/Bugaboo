"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bugaboo",
    description: "Code reviews for everyone",
};

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <meta charSet="UTF'8" />
                <link rel="icon" href="./favicon.ico" />
                <title>Bugaboo</title>

                <body className={inter.className}>
                    <header className="w-full">
                        <Navbar />
                    </header>
                    {children}
                </body>
            </html>
        </QueryClientProvider>
    );
}
