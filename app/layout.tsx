import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { category: string; slug: string };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout children={children} />
      </body>
    </html>
  );
}
