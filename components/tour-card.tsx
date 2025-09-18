import Image from "next/image"
import { Clock } from "lucide-react"

interface TourCardProps {
  title: string
  image: string
  duration: string
  originalPrice: string
  discountedPrice: string
  alt: string
}

export default function TourCard({ title, image, duration, originalPrice, discountedPrice, alt }: TourCardProps) {
  return (
    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 min-h-[3.5rem] leading-tight">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
            <span className="text-2xl font-bold text-red-600">{discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
