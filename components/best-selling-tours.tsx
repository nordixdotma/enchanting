import TourCard from "./tour-card"

const bestSellingTours = [
  {
    title: "4-Day Desert Tour from Marrakech to Merzouga",
    image: "https://enchantingmorocco.com/wp-content/uploads/2023/01/Marrakech-to-Merzouga-desert-tour-4-days-700x500.jpg.webp",
    duration: "4 Days 3 Nights",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "Desert tour with 4x4 vehicle in Sahara dunes",
  },
  {
    title: "4 Days Marrakech to Fes Desert Tour",
    image: "https://enchantingmorocco.com/wp-content/uploads/2023/01/4-Days-Desert-Tour-from-Marrakech-to-Fes-700x500.jpg.webp",
    duration: "4 Days 3 Nights",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "Moroccan kasbah with camels",
  },
  {
    title: "7 Days Morocco Tour",
    image: "https://enchantingmorocco.com/wp-content/uploads/2023/01/Best-of-Morocco-tour-700x500.jpg.webp",
    duration: "7 Days 6 Nights",
    originalPrice: "2,750€",
    discountedPrice: "2,200€",
    alt: "Traditional Moroccan architecture",
  },
]

export default function BestSellingTours() {
  return (
    <section className="py-16 px-4 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-optima font-bold text-gray-900 mb-12 text-left">
          Our Best Selling Tours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellingTours.map((tour, index) => (
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
