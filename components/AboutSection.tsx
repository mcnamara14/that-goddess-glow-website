import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#f5f3f0',
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Black and White Photo on Left */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden border-4 border-white">
              <Image
                src="/tiffany-thater.jpg"
                alt="Tiffany Thater, Makeup Artist"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content on Right */}
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-black/70 font-serif">
              WE'RE THAT GODDESS GLOW
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight">
              WE SEE YOU,
              <br />
              NOT JUST THE
              <br />
              MAKEUP
            </h2>

            <p className="text-lg leading-relaxed text-black/80">
              Since 2013, That Goddess Glow has led with a fresh outlook on bridal makeup. Our work
              is an effortless frame that renders all focus on you.
            </p>

            <div className="space-y-2">
              <p className="text-sm text-black/70">As shared on The Lane's Editor's Notes:</p>
              <p className="text-lg italic leading-relaxed text-black/80 font-serif">
                "Experienced artists with a contemporary intuition for{' '}
                <span className="font-semibold">modern bridal makeup</span>."
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="#about"
                className="inline-block px-8 py-3 border border-black/20 bg-white text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                ABOUT TIFFANY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
