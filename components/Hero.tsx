'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=80',
      alt: 'Woman with makeup',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
      alt: 'Woman with elegant makeup',
    },
    {
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&q=80',
      alt: 'Woman with bridal makeup',
    },
    {
      src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80',
      alt: 'Woman with professional makeup',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
        setIsVisible(true)
      }, 800)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const currentImage = images[currentIndex]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      {/* Background Images with fade */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex && isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        ))}
      </div>

      {/* Colored overlay for brand aesthetic */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      {/* Content - Full width, left aligned, positioned near bottom */}
      <div className="relative z-10 w-full px-6 lg:px-12 h-full flex items-end min-h-screen pb-20 md:pb-32">
        <div className="w-full">
          <p className="text-sm md:text-base tracking-wide text-white/90 mb-2 font-sans">
            Artistry-crafted, bold pigments, high-performance formulations.
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white leading-[1.1]">
            FIND YOUR
            <br />
            GODDESS GLOW
          </h1>
        </div>
      </div>
    </section>
  )
}
