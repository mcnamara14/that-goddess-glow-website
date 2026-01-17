'use client'

import Image from 'next/image'
import Script from 'next/script'
import { useState, useEffect } from 'react'

declare global {
  interface Window {
    iFrameResize: (options: { checkOrigin: boolean; heightCalculationMethod: string }) => void
  }
}

const sliderImages = [
  '/contact-1.jpg',
  '/contact-2.jpg',
  '/contact-3.JPG',
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Attempt to style the iframe content
  useEffect(() => {
    const styleIframe = () => {
      try {
        const iframe = document.getElementById('dubsado-form') as HTMLIFrameElement
        if (iframe && iframe.contentDocument && iframe.contentDocument.head) {
          const style = iframe.contentDocument.createElement('style')
          style.textContent = `
            label {
              font-weight: 600 !important;
            }
            input::placeholder,
            textarea::placeholder {
              color: #333 !important;
              opacity: 0.7 !important;
            }
            button[type="submit"],
            input[type="submit"],
            .dubsado-submit-button,
            [class*="submit"],
            [class*="Submit"],
            button:last-of-type,
            [id*="submit"],
            [id*="Submit"] {
              background-color: #000000 !important;
            }
            @media (max-width: 767px) {
              button[type="submit"],
              input[type="submit"],
              .dubsado-submit-button,
              [class*="submit"],
              [class*="Submit"],
              button:last-of-type,
              [id*="submit"],
              [id*="Submit"] {
                margin-left: -20px !important;
              }
            }
          `
          iframe.contentDocument.head.appendChild(style)
        }
      } catch (e) {
        // CORS error - styling must be done in Dubsado form builder
        console.log('Cannot style iframe content due to CORS restrictions')
      }
    }

    // Try after iframe loads
    const iframe = document.getElementById('dubsado-form') as HTMLIFrameElement
    if (iframe) {
      iframe.addEventListener('load', styleIframe)
      // Also try after a delay in case load event already fired
      setTimeout(styleIframe, 500)
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', styleIframe)
      }
    }
  }, [])

  return (
    <section
      className="pt-8 pb-24 md:pt-8 md:pb-24 relative overflow-hidden"
      style={{
        backgroundColor: '#d1c7bc',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Logo Header */}
        <div className="mb-12 md:mb-10">
          <h1 className="text-[1.25rem] font-clocks font-bold tracking-tight text-black">
            THAT GODDESS GLOW
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-8 items-start">
          {/* Left Side: Image Above Copy */}
          <div className="space-y-8">
            {/* Crossfading Slider Images */}
            <div className="relative w-full">
              <div className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden border-4 border-white rounded-[15px] max-h-[600px]">
                {sliderImages.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Below Image */}
            <div className="space-y-6 !mt-12">
              {/* <p className="text-sm tracking-[0.2em] uppercase text-black/70 font-serif !mt-5">
                GIVING YOU THAT GODDESS GLOW
              </p> */}

              <h2 className="text-4xl md:text-4xl lg:text-4xl font-serif font-normal leading-tight !mt-3">
                SIGNATURE LOOK,
                <br />
                UNMISTAKABLY YOU
              </h2>
              <p className="text-lg leading-relaxed text-black/80">
                Thank you for reaching out! I'm looking forward to connecting with you. Please fill out the form and I will get back to you as soon as possible.
              </p>


            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="pl-0 md:pl-[30px] w-full">
            <div className="space-y-6 w-full">
              <div className="w-full">
                <p className="text-sm tracking-[0.2em] uppercase text-black/70 font-serif mb-2">
                  GET IN TOUCH
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight sm:mb-3">
                  Let's Connect
                </h2>
                <div className="relative md:-ml-[30px] mt-2 w-full -mx-6 md:mx-0">
                  <iframe
                    src="https://hello.dubsado.com/public/form/view/695ed3cc2cca963753488637"
                    frameBorder="0"
                    style={{ width: '1px', minWidth: '100%' }}
                    id="dubsado-form"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setTimeout(() => {
            if (window.iFrameResize) {
              window.iFrameResize({
                checkOrigin: false,
                heightCalculationMethod: 'taggedElement',
              })
            }
          }, 30)
        }}
      />
    </section>
  )
}
