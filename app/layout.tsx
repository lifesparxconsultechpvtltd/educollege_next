import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/src/common/Header";
import Footer from "@/src/common/Footer";
import ChatBot from "@/src/common/chat-bot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"], // optional: control weights
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Educollege",
  description: "Your Gateway to Global Education - Explore Top Universities and Programs Worldwide with Educollege",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        {children}
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
