"use client"

import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

// Lazy load non-critical sections
const HistoricalPlacesSection = dynamic(() => import("@/components/historical-places-section"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <HistoricalPlacesSection />
    </div>
  )
}
