"use client"

import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import BestSellingTours from "@/components/best-selling-tours"
import MoroccoDiscoverySection from "@/components/morocco-discovery-section"
import RecommendedTours from "@/components/recommended-tours"
import MoroccoExpertiseSection from "@/components/morocco-expertise-section"
import WhyChooseMoroccoSection from "@/components/why-choose-morocco-section"
import Personalized from "@/components/personalized"
import LatestArticlesSection from "@/components/latest-articles-section"

// Lazy load non-critical sections
const Enchantingservices = dynamic(() => import("@/components/services"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Enchantingservices />
      <BestSellingTours />
      <MoroccoDiscoverySection />
      <RecommendedTours />
      <MoroccoExpertiseSection />
      <Personalized />
      <WhyChooseMoroccoSection />
      <LatestArticlesSection />
    </div>
  )
}
