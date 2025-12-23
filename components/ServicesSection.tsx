import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      name: 'Wedding Day',
      number: '01',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    },
    {
      name: 'Welcome Party',
      number: '02',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    },
    {
      name: 'Engagement Session',
      number: '03',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    },
    {
      name: 'Rehearsal Dinner',
      number: '04',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    },
    {
      name: "Couple's Editorial",
      number: '05',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    },
    {
      name: 'Day-After Brunch',
      number: '06',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    },
    {
      name: 'Destination',
      number: '07',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 block">
            Services
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            YOUR BEAUTY, YOUR STYLE.
            <br />
            WE ELEVATE BOTH.
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8" />
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-black/70">
            This is about you and your vision as a bride. It's about your comfort level in makeup
            and honoring your personal style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-black/10 hover:border-black/30 bg-white transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-6xl font-serif font-light text-black/5 group-hover:text-black/10 transition-colors duration-300">
                  {service.number}
                </div>

                {/* Service name */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-normal tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {service.name}
                  </h3>
                  <div className="w-12 h-px bg-black/20 group-hover:w-16 group-hover:bg-black/40 transition-all duration-300 mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-24 h-px bg-black/20 mx-auto" />
          <p className="text-lg leading-relaxed text-black/80">
            From our first chat with clients, we build a trusted relationship through collaboration,
            communication and visuals to ensure we're on the same page.
          </p>
          <p className="text-xl font-serif font-light italic leading-relaxed text-black/70">
            To make you feel gorgeous on your wedding weekend is by design.
          </p>
        </div>
      </div>
    </section>
  )
}
