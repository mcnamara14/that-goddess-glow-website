export default function ServicesSection() {
  const services = [
    'Wedding Day',
    'Welcome Party',
    'Engagement Session',
    'Rehearsal Dinner',
    "Couple's Editorial",
    'Day-After Brunch',
    'Destination',
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            YOUR BEAUTY, YOUR STYLE. WE ELEVATE BOTH.
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-normal mb-8">
            WE GET ON THE SAME PAGE FROM THE START
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            This is about you and your vision as a bride. It's about your comfort level in hair and makeup and honoring your personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center py-8 border-b border-black/10 hover:border-black/30 transition-colors"
            >
              <p className="text-lg tracking-wide uppercase">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From our first chat with clients, we build a trusted relationship through collaboration, communication and visuals to ensure we're on the same page.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
            To make you feel gorgeous on your wedding weekend is by design.
          </p>
        </div>
      </div>
    </section>
  )
}

