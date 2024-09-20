import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { clsx } from "clsx";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The mural in Denmark",
  description: "Donation for the mural in Denmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "flex flex-col items-center max-w-screen-xl min-h-screen ml-auto mr-auto",
        )}
      >
        <Header />
        <main className="h-full w-full pl-6 pr-6 bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
