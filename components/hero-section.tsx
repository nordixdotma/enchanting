"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Adjust for mobile browser chrome
    const setHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setHeight()
    window.addEventListener("resize", setHeight)

    // Animation timing
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      window.removeEventListener("resize", setHeight)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative bg-transparent hero-section">
      {/* Add a dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <Container className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div
              className={cn(
                "transition-all duration-1000 transform max-w-4xl",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h1 className="font-optima mb-4 text-5xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                Enchanting Morocco
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-2xl mx-auto font-work-sans">
                Discover the magic of Morocco with our authentic tours, desert adventures, and cultural experiences.
                From the bustling souks of Marrakech to the serene Sahara Desert, we create unforgettable journeys
                through Morocco's most enchanting destinations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="default"
                  variant="outline"
                  className="border-white text-primary bg-white hover:bg-white/10 hover:text-white group transition-all duration-300 rounded-none font-work-sans"
                >
                  Discover Tours
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
