'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ServicesCarousel() {
  const services = [
    {
      title: 'WEDDING DAY',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    },
    {
      title: 'BRIDAL BEAUTY',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    },
    {
      title: 'EDITORIAL MAKEUP',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    },
    {
      title: 'REHEARSAL DINNER',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    },
    {
      title: 'DAY-AFTER BRUNCH',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    },
    {
      title: 'ENGAGEMENT SESSION',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    },
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [centerIndex, setCenterIndex] = useState(0)
  const isSlidingRef = useRef(false)
  const currentCardIndexRef = useRef(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Calculate card width and gap
    const getGap = () => 32 // gap-8 = 2rem = 32px

    const getCardWidth = () => {
      const containerWidth = container.clientWidth
      const visibleArea = containerWidth * 0.76 // 100% - 12% - 12% padding
      const gap = getGap()
      return (visibleArea - gap * 2) / 3 // 3 full cards in visible area
    }

    // Initialize scroll position to show first card centered (using middle set of duplicates)
    const initializeScroll = () => {
      const cards = container.querySelectorAll('div[data-card-index]')
      if (cards.length === 0 || container.clientWidth === 0) return

      // Wait for layout to be ready

      // Double check container is ready
      if (container.clientWidth === 0) return

      const middleSetStart = services.length
      const firstCardInMiddle = cards[middleSetStart] as HTMLElement

      if (firstCardInMiddle && firstCardInMiddle.offsetLeft > 0) {
        const cardWidth = getCardWidth()
        const containerWidth = container.clientWidth
        const gap = getGap()
        // Position to show first card in center of middle 3
        // This ensures 5 cards are visible: partial first, 3 full middle, partial last
        const scrollPosition =
          firstCardInMiddle.offsetLeft - containerWidth * 0.12 - cardWidth - gap
        container.scrollLeft = Math.max(0, scrollPosition)
      }
    }

    // Detect which card is in the center
    const updateCenterCard = () => {
      if (!container) return
      const containerWidth = container.clientWidth
      const centerX = container.scrollLeft + containerWidth / 2

      const cards = container.querySelectorAll('div[data-card-index]')
      cards.forEach(card => {
        const cardElement = card as HTMLElement
        const cardLeft = cardElement.offsetLeft
        const cardWidth = cardElement.offsetWidth
        const cardCenter = cardLeft + cardWidth / 2

        // Check if this card is in the center (within 50px tolerance)
        if (Math.abs(cardCenter - centerX) < 50) {
          const cardIndex = parseInt(cardElement.getAttribute('data-card-index') || '0')
          setCenterIndex(cardIndex % services.length)
        }
      })
    }

    // Slide to next card
    const slideToNext = () => {
      if (!container || isSlidingRef.current) return

      isSlidingRef.current = true
      currentCardIndexRef.current = (currentCardIndexRef.current + 1) % services.length

      // Find the next card to center - prefer cards in the middle set
      const cards = container.querySelectorAll('div[data-card-index]')
      const containerWidth = container.clientWidth
      const targetIndex = currentCardIndexRef.current
      const cardWidth = getCardWidth()
      const gap = getGap()

      // Prefer middle set (services.length to services.length * 2 - 1)
      let targetCard: HTMLElement | null = null
      const middleSetStart = services.length
      const middleSetEnd = services.length * 2

      // First try to find in middle set
      for (let i = middleSetStart; i < middleSetEnd; i++) {
        const card = cards[i] as HTMLElement
        if (card) {
          const cardIndex = parseInt(card.getAttribute('data-card-index') || '0')
          if (cardIndex === targetIndex) {
            targetCard = card
            break
          }
        }
      }

      // If not found in middle set, find closest
      if (!targetCard) {
        let minDistance = Infinity
        cards.forEach(card => {
          const cardElement = card as HTMLElement
          const cardIndex = parseInt(cardElement.getAttribute('data-card-index') || '0')
          if (cardIndex === targetIndex) {
            const cardLeft = cardElement.offsetLeft
            const distance = Math.abs(cardLeft - container.scrollLeft)
            if (distance < minDistance) {
              minDistance = distance
              targetCard = cardElement
            }
          }
        })
      }

      if (!targetCard) {
        isSlidingRef.current = false
        return
      }

      const cardLeft = targetCard.offsetLeft
      // Center the card (middle of 5 visible - center of the 3 middle cards)
      const scrollPosition = cardLeft - containerWidth * 0.12 - cardWidth - gap

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth',
      })

      // Update center card and check infinite loop after scroll completes
      setTimeout(() => {
        updateCenterCard()
        checkInfiniteLoop()
        isSlidingRef.current = false
      }, 600) // Wait for smooth scroll to complete
    }

    // Check for infinite loop reset
    const checkInfiniteLoop = () => {
      if (isSlidingRef.current) return

      const cards = container.querySelectorAll('div[data-card-index]')
      const containerWidth = container.clientWidth
      const scrollLeft = container.scrollLeft
      const cardWidth = getCardWidth()
      const gap = getGap()
      const scrollWidth = container.scrollWidth
      const oneSetWidth = scrollWidth / 3

      // If we're past the middle of the third set, jump to middle set (seamless)
      if (scrollLeft > oneSetWidth * 2.2) {
        const middleSetStart = services.length
        const currentCenterIndex = currentCardIndexRef.current
        // Find the same card in the middle set
        for (let i = middleSetStart; i < services.length * 2; i++) {
          const card = cards[i] as HTMLElement
          const cardIndex = parseInt(card.getAttribute('data-card-index') || '0')
          if (cardIndex === currentCenterIndex) {
            const newScroll = card.offsetLeft - containerWidth * 0.12 - cardWidth - gap
            container.scrollLeft = newScroll // Instant jump, no animation
            break
          }
        }
      }
      // If we're before the middle of the first set, jump to middle set (seamless)
      else if (scrollLeft < oneSetWidth * 0.3) {
        const middleSetStart = services.length
        const currentCenterIndex = currentCardIndexRef.current
        // Find the same card in the middle set
        for (let i = middleSetStart; i < services.length * 2; i++) {
          const card = cards[i] as HTMLElement
          const cardIndex = parseInt(card.getAttribute('data-card-index') || '0')
          if (cardIndex === currentCenterIndex) {
            const newScroll = card.offsetLeft - containerWidth * 0.12 - cardWidth - gap
            container.scrollLeft = newScroll // Instant jump, no animation
            break
          }
        }
      }
    }

    // Initialize on mount - wait for layout to be ready
    const initTimeout = setTimeout(() => {
      initializeScroll()
      // Update center card after scroll is positioned
      setTimeout(() => {
        updateCenterCard()
      }, 50)
    }, 150)

    // Slide, pause briefly, then slide again
    // 2500ms = 600ms slide animation + 1900ms pause
    const interval = setInterval(() => {
      slideToNext()
    }, 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(initTimeout)
    }
  }, [services.length])

  // Duplicate services for infinite scroll
  const duplicatedServices = [...services, ...services, ...services]

  return (
    <section className="py-16 md:py-24 bg-black text-white overflow-hidden w-full">
      <div className="mb-8 px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-serif font-normal tracking-wide">WHAT WE DO</h2>
      </div>

      <div className="relative w-full">
        {/* Left gradient fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, transparent 100%)',
          }}
        />

        {/* Right gradient fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, transparent 100%)',
          }}
        />

        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-scroll scrollbar-hide items-center w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: '12%', // Shows partial first card
            paddingRight: '12%', // Shows partial last card
            height: '500px', // Fixed height to prevent section from moving when cards grow
            minHeight: '500px',
            scrollBehavior: 'smooth',
          }}
        >
          {duplicatedServices.map((service, index) => {
            const serviceIndex = index % services.length
            const isCenter = serviceIndex === centerIndex
            return (
              <div
                key={index}
                data-card-index={serviceIndex}
                className="flex-shrink-0 relative rounded-xl overflow-hidden"
                style={{
                  width: 'calc((100% - 4rem) / 3)', // 3 full cards fit in the visible area (76% after padding, accounting for larger gap)
                  height: isCenter ? '500px' : '400px',
                  opacity: isCenter ? 1 : 0.5,
                  transition: 'height 0.5s ease-in-out, opacity 0.5s ease-in-out',
                  alignSelf: 'center',
                }}
              >
                {/* Image Section with Title Overlay */}
                <div className="relative w-full h-full overflow-hidden bg-black rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="calc((100% - 4rem) / 3)"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Title Overlay - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
                    <h3
                      className={`font-serif font-normal tracking-tight text-white text-center transition-all duration-500 ${
                        isCenter
                          ? 'text-2xl md:text-3xl lg:text-4xl'
                          : 'text-lg md:text-xl lg:text-2xl'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
