"use client"

import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function Personalized () {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-transparent">
      <Container className="max-w-6xl mx-auto">

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Redesigned card with better space usage - now with primary color background */}
          <div className="bg-primary/90 backdrop-blur-sm rounded-md overflow-hidden border border-primary/30">

              {/* Right side: Bio and button */}
              <div className="p-6 md:p-8 text-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-optima font-bold text-white mb-3">Personalized Journeys with a Trusted Morocco Tours Agency</h2>
                  <p className="text-white/90 font-tomato">As a top-rated Morocco tours agency, we understand that every traveler has unique interests and expectations. That’s why we offer customizable itineraries to match your specific needs, whether it’s exploring historical landmarks, experiencing the culinary delights of Moroccan cuisine, or enjoying a peaceful retreat by the Atlantic coast. Our services as a leading Morocco tours company include personalized experiences designed for couples, families, and group travelers. With our extensive knowledge as a Moroccan tour operator, we ensure your adventure is seamless, safe, and enriched with local expertise. Every tour is a journey crafted to leave you with unforgettable memories.</p>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

