import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-normal mb-8">SIGNATURE LOOK:</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-normal mb-12">Unmistakably you.</h3>
        <Link
          href="#contact"
          className="inline-block px-12 py-4 border-2 border-black text-black font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          INQUIRE
        </Link>
      </div>
    </section>
  )
}
