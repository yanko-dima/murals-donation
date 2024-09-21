import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { clsx } from "clsx";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olena Yanko Artist",
  description:
    "Ukrainian artist Murals art and paintings. Artworks for sale. Based in Kyiv.",
};

interface ILayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<ILayoutProps>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.className,
          "antialiased",
          "flex flex-col items-center max-w-screen-xl min-h-screen ml-auto mr-auto",
        )}
      >
        <Header />
        <main className="h-full w-full bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
