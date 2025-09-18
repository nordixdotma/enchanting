"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { Container } from "@/components/ui/container"
import { MapPin, ArrowRight } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      title: "Morocco Tours",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore Morocco's imperial cities, ancient medinas, and stunning landscapes with our comprehensive tour packages designed for every traveler.",
      link: "/morocco-tours",
    },
    {
      title: "Morocco Desert Tours",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
      description:
        "Experience the magic of the Sahara Desert with camel treks, luxury desert camps, and unforgettable sunrises over golden dunes.",
      link: "/desert-tours",
    },
    {
      title: "Marrakech Day Trips",
      image: "https://images.unsplash.com/photo-1585004607620-fb4c44331e73?q=80&w=2070&auto=format&fit=crop",
      description:
        "Discover the Red City's hidden gems, from bustling souks and historic palaces to the famous Jemaa el-Fnaa square.",
      link: "/marrakech-day-trips",
    },
    {
      title: "Morocco Trekking",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
      description:
        "Adventure through the Atlas Mountains, Berber villages, and scenic valleys with our expert mountain guides.",
      link: "/morocco-trekking",
    },
    {
      title: "Shore Excursions",
      image: "https://images.unsplash.com/photo-1578350629128-8d74a309360b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Perfect for cruise passengers, explore Morocco's coastal cities and nearby attractions with our convenient shore excursions.",
      link: "/shore-excursions",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "50px 0px",
  })

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      {/* Desktop Accordion View - Full Width */}
      <div
        ref={ref}
        className={cn("hidden md:block transition-opacity duration-1000 px-4", inView ? "opacity-100" : "opacity-0")}
      >
        <div className="flex h-[450px] w-full gap-2 max-w-[2000px] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer",
                activeIndex === index ? "w-[60%]" : "w-[10%]",
                inView ? `transition-delay-${index * 50}` : "transition-delay-0",
              )}
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    activeIndex === index ? "scale-105" : "scale-100",
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeIndex === index ? "bg-gradient-to-b from-black/30 via-black/5 to-black/30" : "bg-black/20",
                  )}
                ></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Title - always visible but rotated when not active */}
                <div
                  className={cn(
                    "transition-all duration-500",
                    activeIndex !== index && "transform -rotate-90 origin-top-left translate-y-44 translate-x-6",
                  )}
                >
                  <h3
                    className={cn(
                      "font-optima text-white transition-all duration-500",
                      activeIndex === index ? "text-3xl" : "text-xl whitespace-nowrap",
                    )}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Service description and link */}
                {activeIndex === index && (
                  <div className="mt-auto animate-fadeIn max-w-lg">
                    <div className="bg-primary/60 backdrop-blur-sm p-4 rounded-md border border-primary/70">
                      <p className="text-white/90 text-sm font-work-sans mb-3">{service.description}</p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-white hover:text-slate-200 transition-colors duration-300 text-sm font-semibold uppercase"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
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
            {services.map((service, index) => (
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
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <h3 className="font-optima text-xl text-white">{service.title}</h3>
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="p-4 animate-fadeIn">
                    <div className="bg-primary/60 p-3 rounded-md border border-primary/70">
                      <p className="text-white/90 text-xs font-work-sans mb-2">{service.description}</p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-primary hover:text-white transition-colors duration-300 text-xs font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
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
