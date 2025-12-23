import Image from 'next/image'

export default function QuoteHighlightSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #2a2a2a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Image on Left - Makeup products/tools positioned at very top */}
          <div className="relative">
            <div className="relative w-full max-w-lg aspect-[3/4]">
              <Image
                src="/Eyliner.webp"
                alt="Eyeliner makeup products"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
                  transform: 'rotate(180deg)',
                }}
              />
            </div>
          </div>

          {/* Content on Right */}
          <div className="space-y-6 md:space-y-8 text-white">
            <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/80 font-sans font-medium">
              WHY TIFFANY LOVES IT
            </h3>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif font-light leading-relaxed text-white">
              "I always sketch with pencil before I build the look – it gives you total control.
              Every masterpiece starts with precision. Use it to define, trace, smudge, or sharpen –
              it's the foundation of every eye I design."
            </blockquote>

            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-dancing text-white">Tiffany Thater</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
