'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function MultiDayServices() {
  const services = [
    {
      title: 'MULTI-DAY SERVICES',
      description: [
        'Enjoy the indulgence of personalized artistry, attention to detail, and a truly elevated beauty experience across all of your wedding events.',
        "By providing hair and makeup services for your welcome party, rehearsal dinner, or any wedding event, we create cohesive looks that feel effortlessly you and perfectly attuned to each event's unique spirit.",
      ],
      pricing: 'Pricing starts at: $800',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    },
    {
      title: 'WEDDING DAY',
      description: [
        'Your wedding day deserves nothing less than perfection. Our expert team creates timeless, elegant looks that enhance your natural beauty and complement your personal style.',
        'From the first consultation to the final touch, we ensure every detail is meticulously crafted. Our artists work closely with you to understand your vision and bring it to life.',
      ],
      pricing: 'Pricing starts at: $1,200',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
    },
    {
      title: 'BRIDAL BEAUTY',
      description: [
        'Elevate your bridal beauty with our signature approach that combines artistry with precision. We specialize in creating looks that are both timeless and modern.',
        'Our team understands that every bride is unique, and we tailor our services to reflect your individual style and personality.',
      ],
      pricing: 'Pricing starts at: $1,000',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    },
    {
      title: 'EDITORIAL MAKEUP',
      description: [
        'Transform your vision into editorial-worthy artistry. Our editorial makeup services are perfect for engagement sessions, styled shoots, and special events.',
        'We create bold, statement-making looks that photograph beautifully and stand out in any setting.',
      ],
      pricing: 'Pricing starts at: $900',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % services.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentIndex]

  return (
    <section className="py-24 md:py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px] h-[500px]">
          {/* Left Side - Text Content */}
          <div
            className="flex items-start justify-start px-8 lg:px-12 py-12 lg:py-16 flex-1"
            style={{ minHeight: '500px' }}
          >
            <div className="w-full max-w-none space-y-6 relative" style={{ minHeight: '400px' }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-6 absolute top-0 left-0 right-0 w-full"
                  style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
                >
                  <h3 className="text-xs md:text-sm font-sans font-normal tracking-[0.15em] uppercase text-black/70">
                    ABOUT {service.title.replace(/-/g, ' ')}
                  </h3>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight uppercase leading-[1.1]">
                    {service.title === 'MULTI-DAY SERVICES'
                      ? 'MORE OF YOU, LESS OF US.'
                      : service.title}
                  </h2>

                  <div className="space-y-3 pt-2">
                    {service.description.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm md:text-base leading-relaxed text-black/80"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="px-8 py-3 border border-black bg-white text-black text-xs md:text-sm font-sans tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
                      ABOUT US
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with Crossfade */}
          <div
            className="relative overflow-hidden bg-white flex-shrink-0 border rounded-[15px]"
            style={{
              width: '400px',
              minWidth: '400px',
              maxWidth: '400px',
              height: '500px',
              minHeight: '500px',
              maxHeight: '500px',
              padding: '5px',
              borderColor: '#f5f3f0',
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: '5px',
                  left: '5px',
                  right: '5px',
                  bottom: '5px',
                  pointerEvents: index === currentIndex ? 'auto' : 'none',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
