"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { Container } from "@/components/ui/container"
import { MapPin } from "lucide-react"

export default function HistoricalPlacesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Historical places in Marrakech with enhanced data
  const historicalPlaces = [
    {
      title: "Jemaa el-Fnaa",
      image: "https://images.unsplash.com/photo-1585004607620-fb4c44331e73?q=75&w=1200&auto=format&fit=crop",
      year: "11th Century",
      fact: "This UNESCO World Heritage site transforms from a bustling marketplace by day to an open-air restaurant and entertainment venue by night, maintaining traditions that have existed for nearly a millennium.",
    },
    {
      title: "Koutoubia Mosque",
      image: "https://images.unsplash.com/photo-1569370088252-c26ef022594c?q=75&w=1200&auto=format&fit=crop",
      year: "12th Century",
      fact: "The minaret of Koutoubia Mosque served as the model for the Giralda in Seville and Hassan Tower in Rabat, making it one of the most influential architectural works in the Islamic world.",
    },
    {
      title: "Bahia Palace",
      image: "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?q=75&w=1200&auto=format&fit=crop",
      year: "19th Century",
      fact: "Built over 14 years, this palace was designed to be the greatest palace of its time, featuring 160 rooms and a 2-acre garden with over 8,000 hand-painted ceiling tiles.",
    },
    {
      title: "Majorelle Garden",
      image: "https://images.unsplash.com/photo-1729456229097-e60798212180?q=75&w=1200&auto=format&fit=crop",
      year: "1923",
      fact: "The distinctive cobalt blue used throughout the garden was specially created by Jacques Majorelle and is now known as 'Majorelle Blue', later restored by fashion designer Yves Saint Laurent.",
    },
    {
      title: "El Badi Palace",
      image: "https://images.unsplash.com/photo-1592343361402-d4509fb85b36?q=75&w=1200&auto=format&fit=crop",
      year: "16th Century",
      fact: "Once called 'The Wonder of the World', this palace took 25 years to build and was decorated with gold from Sudan, marble from Italy, and precious stones from India.",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "50px 0px",
  })

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <Container className="mb-12">{/* Section content starts directly with the accordion/cards */}</Container>

      {/* Desktop Accordion View - Full Width */}
      <div
        ref={ref}
        className={cn("hidden md:block transition-opacity duration-1000 px-4", inView ? "opacity-100" : "opacity-0")}
      >
        <div className="flex h-[450px] w-full gap-2 max-w-[2000px] mx-auto">
          {historicalPlaces.map((place, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer",
                activeIndex === index ? "w-[60%]" : "w-[10%]",
              )}
              onClick={() => setActiveIndex(index)}
              style={{
                transitionDelay: inView ? `${index * 50}ms` : "0ms",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={place.image || "/placeholder.svg"}
                  alt={place.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    activeIndex === index ? "scale-105" : "scale-100",
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay with further reduced opacity in the middle */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeIndex === index ? "bg-gradient-to-b from-black/40 via-black/5 to-black/40" : "bg-black/30",
                  )}
                ></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Title - always visible but rotated when not active */}
                <div
                  className={cn(
                    "transition-all duration-500",
                    activeIndex !== index && "transform -rotate-90 origin-top-left translate-y-40 translate-x-6",
                  )}
                >
                  <h3
                    className={cn(
                      "font-optima text-white transition-all duration-500",
                      activeIndex === index ? "text-3xl" : "text-xl whitespace-nowrap",
                    )}
                  >
                    {place.title}
                  </h3>

                  {activeIndex === index && (
                    <div className="flex items-center mt-2 text-primary">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium font-work-sans">{place.year}</span>
                    </div>
                  )}
                </div>

                {/* Fact box with increased background opacity */}
                {activeIndex === index && (
                  <div className="mt-auto animate-fadeIn max-w-lg">
                    <div className="bg-primary/30 backdrop-blur-sm p-3 rounded-md border border-primary/40">
                      <p className="text-white/90 text-sm italic font-work-sans">
                        <span className="font-bold text-primary">Did you know?</span> {place.fact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View - In Container */}
      <Container className="max-w-6xl mx-auto md:hidden">
        <div className="opacity-100">
          <div className="space-y-6">
            {historicalPlaces.map((place, index) => (
              <div
                key={index}
                className={cn(
                  "bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transition-all duration-300",
                  activeIndex === index ? "ring-2 ring-primary" : "",
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={place.image || "/placeholder.svg"}
                    alt={place.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                  {/* Reduced contrast overlay for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <h3 className="font-optima text-xl text-white">{place.title}</h3>
                    <div className="flex items-center mt-1 text-primary">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium font-work-sans">{place.year}</span>
                    </div>
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="p-4 animate-fadeIn">
                    <div className="bg-primary/30 p-3 rounded-md border border-primary/40">
                      <p className="text-white/90 text-xs italic font-work-sans">
                        <span className="font-bold text-primary">Did you know?</span> {place.fact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
