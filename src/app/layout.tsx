import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import ConvexCientProvider from "@/components/ConvexCientProvider"

const inter = Inter({ subsets: ["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI-Agent App",
  description: "Your intelligent AI assistant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexCientProvider>
      <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ConvexCientProvider>
    
  )
}