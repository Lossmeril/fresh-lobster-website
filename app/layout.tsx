import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";

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
    <html>
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
