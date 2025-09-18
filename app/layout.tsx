import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
})

// SEO metadata
export const metadata: Metadata = {
  title: "Enchanting Association | Preserving Marrakech's Heritage",
  description:
    "Enchanting is a non-profit Moroccan association established in 2021 with the aim of preserving the tangible and intangible heritage of Marrakech and its surrounding region.",
  keywords: ["Marrakech", "heritage", "culture", "preservation", "Morocco", "non-profit", "association", "Enchanting"],
  authors: [{ name: "Enchanting Association" }],
  creator: "Enchanting Association",
  publisher: "Enchanting Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enchanting.org/",
    title: "Enchanting Association | Preserving Marrakech's Heritage",
    description: "Preserving the tangible and intangible heritage of Marrakech and its region",
    siteName: "Enchanting Association",
    images: [
      {
        url: "https://associationenchanting.org/wp-content/uploads/2023/07/enchanting.png",
        width: 800,
        height: 600,
        alt: "Enchanting Association Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enchanting Association | Preserving Marrakech's Heritage",
    description: "Preserving the tangible and intangible heritage of Marrakech and its region",
    images: ["https://associationenchanting.org/wp-content/uploads/2023/07/enchanting.png"],
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-y-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/optima" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" as="style" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${workSans.variable} font-work-sans overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Background image with overlay */}
          <div className="fixed inset-0 z-[-1]">
            <Image
              src="https://images.unsplash.com/photo-1538230575309-59dfc388ae36?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
