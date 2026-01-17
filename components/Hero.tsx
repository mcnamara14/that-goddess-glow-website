'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const images = [
    {
      src: '/hero-1.JPG',
      alt: 'Hero image 1',
    },
    {
      src: '/hero-2.JPG',
      alt: 'Hero image 2',
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
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-white pt-20 overflow-visible">
        {/* Background Images with fade */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ${
                index === currentIndex && isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={
                index === 0
                  ? {
                      top: '-200px',
                      left: 0,
                      right: 0,
                      height: 'calc(100% + 200px)',
                    }
                  : {
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          ))}
        </div>

        {/* Colored overlay for brand aesthetic */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        {/* Content - Full width, left aligned, positioned near bottom */}
        <div className="relative z-10 w-full px-6 lg:px-12 h-full flex items-end min-h-[70vh] pb-20 md:pb-32">
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

        {/* Signature - positioned at bottom left, half over hero, half under */}
        <div className="absolute bottom-0 left-6 lg:left-12 z-20 translate-y-1/2">
          <Image
            src="/signature.webp"
            alt="Signature"
            width={300}
            height={100}
            className="w-32 md:w-48 lg:w-56 h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>
    </>
  )
}
