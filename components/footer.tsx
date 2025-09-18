"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react"
import { Container } from "@/components/ui/container"
import { useState } from "react"

export default function Footer() {
  const [heartClicks, setHeartClicks] = useState(0)
  const [isHeartAnimating, setIsHeartAnimating] = useState(false)

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const usefulLinks = [
    { href: "#", label: "MOROCCO TOURS" },
    { href: "#", label: "MOROCCO DESERT TOURS" },
    { href: "#", label: "MARRAKECH DAY TRIPS" },
    { href: "#", label: "MOROCCO TREKKING" },
    { href: "#", label: "SHORE EXCURSIONS" },
    { href: "#", label: "BLOG" },
    { href: "#", label: "CONTACT" },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value: "Marrakech, Morocco",
      link: false,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212 662 388 758",
      link: "tel:+212662388758",
    },
    {
      icon: Mail,
      title: "Email",
      value: "enchanting.marrakech@gmail.com",
      link: "mailto:enchanting.marrakech@gmail.com",
    },
  ]

  const handleHeartClick = () => {
    setHeartClicks((prev) => prev + 1)
    setIsHeartAnimating(true)
    setTimeout(() => setIsHeartAnimating(false), 500)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-black relative rounded-t-[30px] md:rounded-t-[80px]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 rounded-t-[30px] md:rounded-t-[80px]"></div>

      <Container className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Vision */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-12 w-32">
                  <Image src="/whitelogo.png" alt="Enchanting Morocco Logo" fill className="object-contain" priority />
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-white/80 mb-8 font-work-sans">
                Discover the magic of Morocco with our authentic tours, desert adventures, and cultural experiences.
                From the bustling souks of Marrakech to the serene Sahara Desert.
              </p>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-primary font-optima">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-none text-white bg-primary/20 transition-all duration-300 hover:bg-primary/40 hover:scale-110"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-optima mb-6 text-xl font-bold text-primary">Quick Links</h3>
              <ul className="space-y-4">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-block text-white/80 transition-all duration-300 hover:text-primary relative group font-work-sans"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-optima mb-6 text-xl font-bold text-primary">Contact Info</h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/20 mr-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white font-optima">{item.title}</p>
                      {item.link ? (
                        <p className="mt-1 text-sm text-white/80 font-work-sans">
                          <a
                            href={typeof item.link === "string" ? item.link : undefined}
                            className="transition-all duration-300 hover:text-primary relative group"
                          >
                            {item.value}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                          </a>
                        </p>
                      ) : (
                        <p className="mt-1 text-sm text-white/80 font-work-sans">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright section */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <Container className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70 font-work-sans">
              © {currentYear} Enchanting Morocco. All rights reserved.
            </p>
            <p className="text-sm text-white/70 flex items-center font-work-sans">
              Made with
              <button onClick={handleHeartClick} className="mx-1 rounded-none p-1" aria-label="Click the heart">
                <Heart
                  className={`h-4 w-4 transition-all duration-300 ${
                    isHeartAnimating ? "scale-150 text-red-400" : "text-primary"
                  }`}
                  fill={heartClicks > 0 ? "#f87171" : "none"}
                />
                {heartClicks > 0 && <span className="sr-only">Heart clicked {heartClicks} times</span>}
              </button>
              in Morocco
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
