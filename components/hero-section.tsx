"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const [isVisible, setIsVisible] = useState(false)

  // Adjust for mobile browser chrome
  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
      setViewportHeight(`calc(var(--vh, 1vh) * 100)`)
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
    <section
      className="relative bg-transparent"
      style={{
        height: viewportHeight,
        backgroundImage: "url('https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white font-work-sans">Established 2021</span>
              </div>
              <h1 className="font-optima mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                Preserving Marrakech's Heritage
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-2xl mx-auto font-work-sans">
                Enchanting is a non-profit Moroccan association dedicated to preserving the tangible and intangible heritage
                of Marrakech and its surrounding region through cultural initiatives and community engagement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="default"
                  variant="outline"
                  className="border-white text-primary bg-white hover:bg-white/10 hover:text-white group transition-all duration-300 rounded-none font-work-sans"
                >
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
