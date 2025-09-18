import TourCard from "./tour-card"

const recommendedTours = [
  {
    title: "Toubkal Summit Hike & Morocco Sahara Desert Tour",
    image: "https://enchantingmorocco.com/wp-content/uploads/2025/04/Toubkal-trek-and-Sahara-desert-tour-700x500-1.webp",
    duration: "1 Days",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "Toubkal Summit Hike & Morocco Sahara Desert Toure",
  },
  {
    title: "3 Days desert tour from Marrakech to Merzouga",
    image: "https://enchantingmorocco.com/wp-content/uploads/2025/04/3-Days-Desert-tour-from-Marrakech-to-Merzouga-700x500-1.webp",
    duration: "3 Days 2 Nights",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "3 Days desert tour from Marrakech to Merzouga",
  },
  {
    title: "15 Days Morocco Tour",
    image: "https://enchantingmorocco.com/wp-content/uploads/2023/02/Grand-tour-of-Morocco-1.webp",
    duration: "7 Days 6 Nights",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "15 Days Morocco Tour",
  },
]

export default function RecommendedTours() {
  return (
    <section className="py-16 px-4 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-optima font-bold text-gray-900 mb-12 text-left">
          Our Recommended Tours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedTours.map((tour, index) => (
            <TourCard
              key={index}
              title={tour.title}
              image={tour.image}
              duration={tour.duration}
              originalPrice={tour.originalPrice}
              discountedPrice={tour.discountedPrice}
              alt={tour.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
