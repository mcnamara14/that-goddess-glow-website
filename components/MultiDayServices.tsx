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
        'This curated hair and makeup experience is designed for clients who desire high-touch service, harmonious beauty and dedicated artists who understand your vision from the first to the last event.',
        'Reserve your customized multi-day service and step into every occasion with unparalleled beauty and confidence.',
      ],
      pricing: 'Pricing starts at: $800',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    },
    {
      title: 'WEDDING DAY',
      description: [
        'Your wedding day deserves nothing less than perfection. Our expert team creates timeless, elegant looks that enhance your natural beauty and complement your personal style.',
        'From the first consultation to the final touch, we ensure every detail is meticulously crafted. Our artists work closely with you to understand your vision and bring it to life.',
        'Experience the confidence that comes with knowing you look absolutely stunning on the most important day of your life.',
      ],
      pricing: 'Pricing starts at: $1,200',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
    },
    {
      title: 'BRIDAL BEAUTY',
      description: [
        'Elevate your bridal beauty with our signature approach that combines artistry with precision. We specialize in creating looks that are both timeless and modern.',
        'Our team understands that every bride is unique, and we tailor our services to reflect your individual style and personality.',
        'Let us create a look that makes you feel like the most beautiful version of yourself on your special day.',
      ],
      pricing: 'Pricing starts at: $1,000',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    },
    {
      title: 'EDITORIAL MAKEUP',
      description: [
        'Transform your vision into editorial-worthy artistry. Our editorial makeup services are perfect for engagement sessions, styled shoots, and special events.',
        'We create bold, statement-making looks that photograph beautifully and stand out in any setting.',
        "Whether you're looking for a dramatic transformation or a subtle enhancement, our editorial expertise brings your creative vision to life.",
      ],
      pricing: 'Pricing starts at: $900',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTextVisible, setIsTextVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Start image crossfade
      setCurrentIndex(prev => (prev + 1) % services.length)

      // Fade out text during image transition
      setIsTextVisible(false)

      // After image crossfade completes, fade text back in
      setTimeout(() => {
        setIsTextVisible(true)
      }, 1500) // Wait for image crossfade to complete
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentIndex]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTextVisible ? 1 : 0, y: isTextVisible ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight">
                  {currentService.title}
                </h2>

                <div className="space-y-4">
                  {currentService.description.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-black/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Image with Crossfade */}
          <div
            className="relative aspect-[3/4] overflow-hidden bg-black"
            style={{ maxHeight: 'calc(100vh - 400px)' }}
          >
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
