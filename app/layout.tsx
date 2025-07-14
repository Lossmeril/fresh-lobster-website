import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contactSection";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Lobster",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" scroll-smooth" lang="cs">
      <body className={`${font.className} max-w-screen overflow-x-hidden`}>
        <Header />
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
