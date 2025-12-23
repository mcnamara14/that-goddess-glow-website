'use client'

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Working with That Goddess Glow was an absolute dream. I was genuinely sad when they had to leave.',
      author: 'Audrey P.',
      location: 'Chicago',
    },
    {
      quote: 'It was such a pleasure working with you, a true consummate professional.',
      author: 'Alison Laesser-Keck',
      location: 'Alison Bryan Destinations',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-serif font-normal mb-8 text-center">
          FEEL LIKE THE BEST VERSION OF YOURSELF ON YOUR WEDDING DAY
        </h2>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <div
            className={`text-center transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-serif font-normal mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
            <p className="text-sm tracking-widest uppercase">— {currentTestimonial.author}</p>
            {currentTestimonial.location && (
              <p className="text-sm text-gray-600 mt-1">{currentTestimonial.location}</p>
            )}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsVisible(true)
                }, 500)
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
