'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section
      className="py-24 md:py-24 relative overflow-hidden"
      style={{
        backgroundColor: '#efe2e2',
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side: Image Above Copy */}
          <div className="space-y-8">
            {/* Black and White Photo */}
            <div className="relative w-full">
              <div className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden border-4 border-white rounded-[15px] max-h-[600px]">
                <Image
                  src="/tiffany-thater.jpg"
                  alt="Tiffany Thater, Makeup Artist"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Below Image */}
            <div className="space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-black/70 font-serif">
                WE'RE THAT GODDESS GLOW
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight">
                SIGNATURE LOOK
                <br />
                UNMISTAKABLY YOU
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
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="pl-[30px]">
            <div className="space-y-6">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-black/70 font-serif mb-2">
                  GET IN TOUCH
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight mb-6">
                  Let's Connect
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black rounded-[8px] focus:outline-none focus:border-black/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black rounded-[8px] focus:outline-none focus:border-black/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black/70 mb-2 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black rounded-[8px] focus:outline-none focus:border-black/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-black/70 mb-2 uppercase tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black rounded-[8px] focus:outline-none focus:border-black/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black rounded-[8px] focus:outline-none focus:border-black/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 border border-black/20 bg-white text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-[8px]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

