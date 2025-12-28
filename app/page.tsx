import Hero from '@/components/Hero'
import QuoteSection from '@/components/QuoteSection'
import AboutSection from '@/components/AboutSection'
import QuoteHighlightSection from '@/components/QuoteHighlightSection'
import ServicesCarousel from '@/components/ServicesCarousel'
import MultiDayServices from '@/components/MultiDayServices'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PortraitCarousel from '@/components/PortraitCarousel'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteSection />
      <AboutSection />
      {/* <QuoteHighlightSection /> */}
      {/* <ServicesCarousel /> */}
      <PortraitCarousel />
      <MultiDayServices />
      <TestimonialsSection />
      {/* <ServicesSection /> */}
      {/* <GallerySection /> */}
      <CTA />
    </>
  )
}
