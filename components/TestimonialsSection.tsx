export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with That Goddess Glow was an absolute dream. I was genuinely sad when they had to leave.",
      author: "Audrey P.",
      location: "Chicago",
    },
    {
      quote: "It was such a pleasure working with you, a true consummate professional.",
      author: "Alison Laesser-Keck",
      location: "Alison Bryan Destinations",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-serif font-normal mb-16 text-center">
          NOTHING FEELS BETTER THAN LOOKING LIKE YOURSELF ON YOUR WEDDING DAY
        </h2>
        
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="text-2xl md:text-3xl font-serif font-normal mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-sm tracking-widest uppercase">
                — {testimonial.author}
              </p>
              {testimonial.location && (
                <p className="text-sm text-gray-600 mt-1">{testimonial.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

