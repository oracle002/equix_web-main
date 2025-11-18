import type { Metadata } from "next";
import { urbanist, satoshi } from '@/lib/fonts'
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Equix Solutions | Web, App & AI Development Company",
  description: "Empowering brands through design, code, and AI. Equix Solutions builds future-ready websites, mobile apps, and intelligent digital experiences that scale.",
  keywords: [
    "digital transformation",
    "web & app development",
    "AI solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${satoshi.variable}`}>
      <body className="bg-white ">
        <Header />
<main className="pt-12 lg:pt-9">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

